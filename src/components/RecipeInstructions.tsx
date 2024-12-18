import React from 'react';
import { Recipe } from '../types/interfaces';

// Props interface for RecipeInstructions component
interface RecipeInstructionsProps {
  recipe: Recipe; // The recipe object containing details to display
}

/**
 * RecipeInstructions component displays the cooking instructions for a recipe.
 * It formats the instructions by splitting them into individual steps.
 *
 * @param {RecipeInstructionsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered instructions section.
 */
export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  recipe,
}) => {
  // Split instructions by new line and filter out any empty lines
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
