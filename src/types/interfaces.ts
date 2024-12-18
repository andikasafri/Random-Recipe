/**
 * Represents a category of recipes.
 */
export interface Category {
  idCategory: string; // Unique identifier for the category
  strCategory: string; // Name of the category
  strCategoryThumb: string; // Thumbnail image URL for the category
  strCategoryDescription: string; // Description of the category
}

/**
 * Represents a recipe.
 */
export interface Recipe {
  idMeal: string; // Unique identifier for the meal
  strMeal: string; // Name of the meal
  strCategory: string; // Category of the meal
  strArea: string; // Area or cuisine type of the meal
  strInstructions: string; // Instructions for preparing the meal
  strMealThumb: string; // Thumbnail image URL for the meal
  strTags?: string; // Tags associated with the meal (optional)
  strYoutube?: string; // Optional URL for a YouTube video related to the recipe
  [key: string]: string | null | undefined; // Additional properties
}

/**
 * Represents the API response containing meals and categories.
 */
export interface ApiResponse<T> {
  meals: T[] | null; // Array of meals or null
  categories?: Category[] | null; // Optional array of categories or null
}
