import React, { useState, useEffect } from 'react';
import { Recipe } from './types/Recipe';
import { fetchRandomRecipe } from './services/api';
import { formatApiError } from './utils/api-helpers';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingState } from './components/LoadingState';
import RecipeCard from './components/RecipeCard';
import { Loader2, Utensils, RefreshCw } from 'lucide-react';

function App() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getRandomRecipe = async () => {
    setLoading(true);
    setError(null);
    try {
      const newRecipe = await fetchRandomRecipe();
      setRecipe(newRecipe);
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-secondary-800 mb-2">
              Discover Your Next Meal
            </h1>
            <p className="text-secondary-600">
              Explore delicious recipes from around the world
            </p>
          </header>

          {error && (
            <div className="bg-accent-50 border border-accent-200 text-accent-700 px-4 py-3 rounded-lg relative mb-6">
              {error}
              <button
                onClick={getRandomRecipe}
                className="ml-4 text-accent-600 hover:text-accent-800"
              >
                Try again
              </button>
            </div>
          )}

          <div className="text-center mb-8">
            <button
              onClick={getRandomRecipe}
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
          </div>

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

export default App;