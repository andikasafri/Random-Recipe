import React from 'react';
import { ExternalLink } from 'lucide-react';

interface RecipeActionsProps {
  videoUrl?: string;
}

export const RecipeActions: React.FC<RecipeActionsProps> = ({ videoUrl }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed bottom-6 right-6">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-full hover:bg-accent-700 transition-all transform hover:-translate-y-0.5 font-semibold shadow-lg hover:shadow-xl"
      >
        <ExternalLink className="w-5 h-5" />
        Watch Tutorial
      </a>
    </div>
  );
};