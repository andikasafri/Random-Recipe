import { Recipe, ApiResponse, Category } from '../types/Recipe';
import { ApiError } from '../types/errors';
import { fetchWithRetry } from '../utils/api-helpers';

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Fetches a random recipe from the API with retry mechanism
 * @returns Promise<Recipe>
 * @throws {ApiError} When the fetch fails after retries
 */
export async function fetchRandomRecipe(): Promise<Recipe> {
  try {
    const response = await fetchWithRetry(`${BASE_URL}/random.php`);
    const data: ApiResponse<Recipe> = await response.json();
    
    if (!data.meals?.[0]) {
      throw new ApiError('No recipe found', 'NO_RECIPE', 0);
    }
    
    return data.meals[0];
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      'Failed to fetch recipe',
      'FETCH_ERROR',
      0
    );
  }
}

/**
 * Fetches all available categories
 * @returns Promise<Category[]>
 * @throws {ApiError} When the fetch fails after retries
 */
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetchWithRetry(`${BASE_URL}/categories.php`);
    const data: ApiResponse<Category> = await response.json();
    
    if (!data.categories) {
      throw new ApiError('No categories found', 'NO_CATEGORIES', 0);
    }
    
    return data.categories;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      'Failed to fetch categories',
      'FETCH_ERROR',
      0
    );
  }
}