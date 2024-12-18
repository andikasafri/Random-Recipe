import React from 'react';
import { Recipe } from '../types/interfaces';

// Props interface for RecipeIngredients component
interface RecipeIngredientsProps {
  recipe: Recipe; // The recipe object containing details to display
}

/**
 * RecipeIngredients component displays the list of ingredients for a recipe.
 * It extracts ingredients and their measurements from the recipe object.
 *
 * @param {RecipeIngredientsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered ingredients section.
 */
export const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  recipe,
}) => {
  // Function to extract ingredients and their measurements from the recipe
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      // Check if the ingredient is valid and not empty
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <section className="recipe-ingredients">
      <h2 className="font-display text-h2 text-primary mb-4">Ingredients</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {getIngredients().map(({ ingredient, measure }, index) => (
          <li key={index} className="flex items-center gap-2 text-body">
            <span className="font-semibold text-secondary">{measure}</span>
            <span className="text-text">{ingredient}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
