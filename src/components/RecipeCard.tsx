import React from 'react';
import { Recipe } from '../types/interfaces';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeInstructions } from './RecipeInstructions';

// Props interface for RecipeCard component
interface RecipeCardProps {
  recipe: Recipe; // The recipe object containing details to display
}

/**
 * RecipeCard component displays the details of a recipe, including the header,
 * ingredients, instructions, and a link to a video tutorial if available.
 *
 * @param {RecipeCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered recipe card component.
 */
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative h-96">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover"
          loading="lazy" // Performance improvement
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="font-display text-4xl font-bold mb-2">
            {recipe.strMeal}
          </h1>
          <div className="flex items-center gap-4 text-white/90">
            <span>{recipe.strCategory}</span>
            <span>•</span>
            <span>{recipe.strArea}</span>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white">
        <div className="grid gap-8">
          <RecipeIngredients recipe={recipe} />
          <RecipeInstructions recipe={recipe} />

          {recipe.strYoutube && (
            <div className="text-center">
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-all transform hover:-translate-y-0.5 font-semibold shadow-lg hover:shadow-xl"
              >
                Watch Video Tutorial
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
