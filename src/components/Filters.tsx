import { Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { FilterOptions } from '../types/hospital';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  const specialties = ['All', 'Emergency Care', 'Cardiology', 'Pediatrics', 'Surgery'];
  const { theme } = useTheme(); // Access the current theme

  return (
    <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Filters</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.emergency}
              onChange={(e) => onFilterChange({ ...filters, emergency: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="text-red-600">Emergency Only</span> {/* Red text for the checkbox */}
          </label>
        </div>

        <div>
          <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
            Maximum Distance
          </label>
          <select
            value={filters.maxDistance}
            onChange={(e) => onFilterChange({ ...filters, maxDistance: Number(e.target.value) })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900'}`}
          >
            <option value={1}>1 km</option>
            <option value={5}>5 km</option>
            <option value={10}>10 km</option>
            <option value={20}>20 km</option>
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
            Specialty
          </label>
          <select
            value={filters.specialty}
            onChange={(e) => onFilterChange({ ...filters, specialty: e.target.value })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900'}`}
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty} className={theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
