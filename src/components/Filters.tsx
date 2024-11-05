import React from 'react';
import { FilterOptions } from '../types/hospital';
import { Filter } from 'lucide-react';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  const specialties = ['All', 'Emergency Care', 'Cardiology', 'Pediatrics', 'Surgery'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
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
            <span className="text-gray-700">Emergency Only</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Distance
          </label>
          <select
            value={filters.maxDistance}
            onChange={(e) => onFilterChange({ ...filters, maxDistance: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value={1}>1 mile</option>
            <option value={5}>5 miles</option>
            <option value={10}>10 miles</option>
            <option value={20}>20 miles</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialty
          </label>
          <select
            value={filters.specialty}
            onChange={(e) => onFilterChange({ ...filters, specialty: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}