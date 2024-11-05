// src/components/Navbar.tsx
import { Building2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext'; // Adjust the path as needed

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`navbar sticky top-0 z-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-navBackground'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Building2 className="h-8 w-8 text-secondary" />
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nearby Hospitals</h1>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only" onChange={toggleTheme} checked={theme === 'dark'} />
          <div className={`w-10 h-5 rounded-full shadow-inner ${theme === 'dark' ? 'bg-secondary' : 'bg-gray-300'}`}></div>
          <div className={`absolute w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${theme === 'dark' ? 'transform translate-x-full bg-secondary' : ''}`}></div>
        </label>
      </div>
    </header>
  );
}

export default Navbar;
