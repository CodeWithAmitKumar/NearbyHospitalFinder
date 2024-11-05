// src/components/Navbar.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className={`navbar sticky top-0 z-10 ${theme === 'dark' ? 'bg-navBackground' : 'bg-white'} text-white shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Find Nearby Hospitals 🏥 </h1>
        <button 
          onClick={toggleTheme} 
          className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} transition`}
        >
          {theme === 'dark' ? '🌞 Light Mode' : '🌜 Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
