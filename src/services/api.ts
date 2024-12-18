import { ApiError } from '../types/errors';
import { Recipe } from '../types/interfaces';

/**
 * Base URL for API requests.
 */
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Fetch data from TheMealDB API.
 *
 * @param endpoint - API endpoint to fetch data from.
 * @returns Response data as a generic type.
 * @throws ApiError if the fetch fails.
 */
const fetchFromApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch (${response.status}): ${response.statusText}`,
        'FETCH_ERROR',
        response.status // Pass the status as retryCount
      );
    }

    // Parse and return the JSON response
    return await response.json();
  } catch (error) {
    // Handle known ApiError
    if (error instanceof ApiError) throw error;

    // Handle unknown errors
    throw new ApiError('An unknown error occurred', 'UNKNOWN_ERROR', 0); // Pass 0 as retryCount
  }
};

/**
 * Fetch a random recipe.
 *
 * @returns A single recipe.
 * @throws ApiError if no recipe is found or if the fetch fails.
 */
export const fetchRandomRecipe = async (): Promise<Recipe> => {
  const data = await fetchFromApi<{ meals: Recipe[] }>('random.php');

  // Check if meals data is available
  if (!data.meals || data.meals.length === 0) {
    throw new ApiError('No recipe data available.', 'NO_DATA', 0); // Pass 0 as retryCount
  }

  // Return the first recipe from the meals array
  return data.meals[0];
};
