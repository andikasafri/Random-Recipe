import React from 'react';
import { ChefHat, Clock, Globe } from 'lucide-react';
import { Recipe } from '../types/interfaces';

// Props interface for RecipeHeader component
interface RecipeHeaderProps {
  recipe: Recipe; // The recipe object containing details to display
}

/**
 * RecipeHeader component displays the header section of a recipe, including the meal image,
 * name, category, and area of origin.
 *
 * @param {RecipeHeaderProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component displaying the recipe header.
 */
export const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => (
  <header className="recipe-header">
    <h1 className="font-display text-h1 text-primary mb-4">{recipe.strMeal}</h1>
    <div className="flex gap-4 mb-4 text-small">
      <div className="flex items-center gap-2">
        <ChefHat className="w-5 h-5 text-secondary" />
        <span>{recipe.strCategory}</span>
      </div>
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-secondary" />
        <span>{recipe.strArea}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-secondary" />
        <span>30 mins</span> {/* Placeholder for cooking time */}
      </div>
    </div>
  </header>
);
