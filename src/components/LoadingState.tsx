import React from 'react';

export const LoadingState: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-96 bg-primary-200 rounded-t-2xl" />
    <div className="p-8 space-y-6">
      <div className="h-8 bg-primary-200 rounded w-3/4" />
      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-4 bg-primary-200 rounded w-full" />
        ))}
      </div>
    </div>
  </div>
);