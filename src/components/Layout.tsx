import React from 'react';
import { Logo } from '../assets/logo';
import { Search, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo className="w-8 h-8 text-accent-600" />
              <span className="ml-2 text-xl font-display font-bold text-secondary-800">
                CulinaryCompass
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-primary-100 text-secondary-700">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-primary-100 text-secondary-700">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};