import React from 'react';
import { ExternalLink } from 'lucide-react';

// Props interface for RecipeActions component
interface RecipeActionsProps {
  videoUrl?: string; // Optional URL for the tutorial video
}

/**
 * RecipeActions component renders a button that links to a tutorial video.
 *
 * @param {RecipeActionsProps} props - The props for the component.
 * @param {string} [props.videoUrl] - The URL of the tutorial video. If not provided, the component will not render.
 * @returns {JSX.Element | null} The rendered component or null if no videoUrl is provided.
 */
export const RecipeActions: React.FC<RecipeActionsProps> = ({ videoUrl }) => {
  // Early return if no video URL is provided
  if (!videoUrl) return null;

  return (
    <div className="fixed bottom-6 right-6">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-full hover:bg-accent-700 transition-all transform hover:-translate-y-0.5 font-semibold shadow-lg hover:shadow-xl"
        aria-label="Watch tutorial video" // Accessibility improvement
      >
        <ExternalLink className="w-5 h-5" aria-hidden="true" />{' '}
        {/* Hide icon from screen readers */}
        Watch Tutorial
      </a>
    </div>
  );
};
