import React from 'react';
import { Search, Menu } from 'lucide-react';

// Props interface for Layout component
interface LayoutProps {
  children: React.ReactNode; // The child components to render within the layout
}

/**
 * Layout component serves as a wrapper for the main application layout,
 * including a navigation bar and a main content area.
 *
 * @param {LayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered layout component.
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-display font-bold text-secondary-800">
                CulinaryCompass
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-full hover:bg-primary-100 text-secondary-700"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-primary-100 text-secondary-700"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children} {/* Render child components in the main area */}
      </main>
    </div>
  );
};
