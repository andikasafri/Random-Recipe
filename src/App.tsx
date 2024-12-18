import { useState, useEffect, useCallback } from 'react'; // Added `useCallback` for memoization
import { Recipe } from './types/interfaces';
import { fetchRandomRecipe } from './services/api';
import { formatApiError } from './utils/api-helpers';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingState } from './components/LoadingState';
import RecipeCard from './components/RecipeCard';
import { Loader2, RefreshCw } from 'lucide-react';

/**
 * Main application component that fetches and displays random recipes.
 */
function App() {
  // State for managing recipe data, loading state, and error messages.
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches a random recipe and updates the state.
   * - Resets error state on each call.
   * - Handles loading state to prevent duplicate requests.
   */
  const getRandomRecipe = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const newRecipe = await fetchRandomRecipe();
      setRecipe(newRecipe);
    } catch (err) {
      setError(formatApiError(err)); // Formats API errors for better user readability.
    } finally {
      setLoading(false);
    }
  }, []); // `useCallback` ensures the function isn't recreated on every render.

  // Fetch a random recipe when the component mounts.
  useEffect(() => {
    getRandomRecipe();
  }, [getRandomRecipe]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-primary-50">
        {/* Main container */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-secondary-800 mb-2">
              Discover Your Next Meal
            </h1>
            <p className="text-secondary-600">
              Explore delicious recipes from around the world
            </p>
          </header>

          {/* Error Message */}
          {error && <ErrorMessage error={error} onRetry={getRandomRecipe} />}

          {/* Action Button */}
          <div className="text-center mb-8">
            <DiscoverButton loading={loading} onClick={getRandomRecipe} />
          </div>

          {/* Recipe or Loading State */}
          {loading ? (
            <LoadingState />
          ) : (
            recipe && <RecipeCard recipe={recipe} />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

/**
 * Displays an error message with a retry button.
 * @param error - The error message to display.
 * @param onRetry - Callback to retry fetching data.
 */
function ErrorMessage({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div className="bg-accent-50 border border-accent-200 text-accent-700 px-4 py-3 rounded-lg relative mb-6">
      {error}
      <button
        onClick={onRetry}
        className="ml-4 text-accent-600 hover:text-accent-800"
      >
        Try again
      </button>
    </div>
  );
}

/**
 * Renders the discover button with loading and idle states.
 * @param loading - Whether the button is in a loading state.
 * @param onClick - Callback to trigger when the button is clicked.
 */
function DiscoverButton({
  loading,
  onClick,
}: {
  loading: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-accent-700 transition-colors disabled:opacity-50"
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <RefreshCw className="w-5 h-5" />
      )}
      {loading ? 'Finding Recipe...' : 'Discover New Recipe'}
    </button>
  );
}

export default App;
