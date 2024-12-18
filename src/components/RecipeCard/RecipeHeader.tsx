import React from 'react';
import { Recipe } from '../../types/interfaces';

// Props interface for RecipeHeader component
interface RecipeHeaderProps {
  recipe: Recipe; // The recipe object containing details to display
}

/**
 * RecipeHeader component displays the header section of a recipe, including the meal image,
 * name, category, and area of origin.
 *
 * @param {RecipeHeaderProps} props - The props for the component.
 * @param {Recipe} props.recipe - The recipe object containing details such as image, name, category, and area.
 * @returns {JSX.Element} The rendered component displaying the recipe header.
 */
export const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => {
  // Destructure properties from the recipe object for cleaner access
  const { strMealThumb, strMeal, strCategory, strArea } = recipe;

  return (
    <div className="relative h-96">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-full object-cover"
        loading="lazy" // Performance improvement
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="font-display text-4xl font-bold text-white mb-2">
          {strMeal}
        </h1>
        <div className="flex items-center gap-4 text-white/90">
          <span>{strCategory}</span>
          <span>•</span>
          <span>{strArea}</span>
        </div>
      </div>
    </div>
  );
};
