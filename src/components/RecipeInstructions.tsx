import React from 'react';
import { Recipe } from '../types/interfaces';

interface RecipeInstructionsProps {
  recipe: Recipe;
}

export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({ recipe }) => {
  const instructions = recipe.strInstructions.split('\n').filter(Boolean);

  return (
    <section className="recipe-instructions">
      <h2 className="font-display text-h2 text-primary mb-4">Instructions</h2>
      <ol className="list-decimal list-inside space-y-4">
        {instructions.map((instruction, index) => (
          <li key={index} className="text-body leading-relaxed text-text">
            {instruction.trim()}
          </li>
        ))}
      </ol>
    </section>
  );
};