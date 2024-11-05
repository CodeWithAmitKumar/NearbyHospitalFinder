import React from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';
import { Hospital } from '../types/hospital';
import { apiConfig, validateApiKeys } from '../config/api';

interface MapPlaceholderProps {
  hospitals: Hospital[];
  selectedHospital: Hospital | null;
  onHospitalSelect: (hospital: Hospital) => void;
}

export function MapPlaceholder({ hospitals, selectedHospital, onHospitalSelect }: MapPlaceholderProps) {
  const hasValidApiKeys = validateApiKeys();

  if (!hasValidApiKeys) {
    return (
      <div className="bg-yellow-50 rounded-lg p-6 h-full min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">API Key Required</h3>
          <p className="text-sm text-yellow-600">
            Please add your API keys in the .env file to enable the interactive map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 rounded-lg p-6 h-full min-h-[400px] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="h-12 w-12 text-blue-500" />
          </div>
          <p className="text-gray-600">Interactive map placeholder</p>
          <p className="text-sm text-gray-500 mt-2">
            {hospitals.length} hospitals in view
          </p>
        </div>
      </div>
      
      {/* Hospital markers */}
      <div className="absolute inset-0">
        {hospitals.map((hospital) => (
          <button
            key={hospital.id}
            onClick={() => onHospitalSelect(hospital)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
              getRandomPosition()
            } ${
              selectedHospital?.id === hospital.id
                ? 'text-blue-600 scale-125'
                : 'text-gray-600 hover:text-blue-500'
            } transition-all`}
          >
            <MapPin className="h-6 w-6" />
          </button>
        ))}
      </div>
    </div>
  );
}

function getRandomPosition() {
  const positions = [
    'top-1/4 left-1/4',
    'top-1/3 left-2/3',
    'top-2/3 left-1/3',
    'top-1/2 left-1/2',
    'top-3/4 left-3/4',
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}