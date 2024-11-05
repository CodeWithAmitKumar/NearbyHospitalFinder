// src/App.tsx
import { useMemo, useState } from 'react';
import { Filters } from './components/Filters';
import { HospitalCard } from './components/HospitalCard';
import { MapPlaceholder } from './components/MapPlaceholder';
import Navbar from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { hospitals } from './data/hospitals';
import { FilterOptions, Hospital } from './types/hospital';

function App() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    emergency: false,
    maxDistance: 10,
    specialty: 'All',
    city: ''
  });
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      const cityMatch = !cityQuery || hospital.city.toLowerCase().includes(cityQuery.toLowerCase());
      const searchMatch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const distanceMatch = hospital.distance <= filters.maxDistance;
      const emergencyMatch = !filters.emergency || hospital.emergency;
      const specialtyMatch = filters.specialty === 'All' || hospital.specialties.includes(filters.specialty);

      return cityMatch && searchMatch && distanceMatch && emergencyMatch && specialtyMatch;
    });
  }, [searchQuery, cityQuery, filters]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-main-gradient'}`}>
      <Navbar />
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              cityQuery={cityQuery}
              onCityChange={setCityQuery}
            />
            <Filters 
              filters={filters}
              onFilterChange={setFilters}
            />
            <div className={`bg-white p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className={`text-center p-3 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-primary text-white'} rounded-lg`}>
                  <div className="text-2xl font-bold">
                    {filteredHospitals.length}
                  </div>
                  <div className="text-sm">Hospitals Found</div>
                </div>
                <div className={`text-center p-3 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-secondary text-white'} rounded-lg`}>
                  <div className="text-2xl font-bold">
                    {filteredHospitals.filter(h => h.emergency).length}
                  </div>
                  <div className="text-sm">With ER</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <MapPlaceholder 
              hospitals={filteredHospitals}
              selectedHospital={selectedHospital}
              onHospitalSelect={setSelectedHospital}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHospitals.map((hospital) => (
                <HospitalCard 
                  key={hospital.id} 
                  hospital={hospital}
                />
              ))}
            </div>
            {filteredHospitals.length === 0 && (
              <div className="text-center py-12">
                <p className={`text-secondary ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>No hospitals match your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
