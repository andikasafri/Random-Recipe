import React from 'react';
import { Recipe } from '../../types/Recipe';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => (
  <div className="relative h-96">
    <img 
      src={recipe.strMealThumb} 
      alt={recipe.strMeal}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h1 className="font-display text-4xl font-bold text-white mb-2">
        {recipe.strMeal}
      </h1>
      <div className="flex items-center gap-4 text-white/90">
        <span>{recipe.strCategory}</span>
        <span>•</span>
        <span>{recipe.strArea}</span>
      </div>
    </div>
  </div>
);