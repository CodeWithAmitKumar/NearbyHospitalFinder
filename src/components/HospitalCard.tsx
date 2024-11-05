import React from 'react';
import { Hospital } from '../types/hospital';
import { Phone, Clock, Star, AlertCircle, MapPin } from 'lucide-react';

interface HospitalCardProps {
  hospital: Hospital;
}

export function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={hospital.image} 
        alt={hospital.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
          {hospital.emergency && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              ER
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1 mt-1 text-gray-600 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{hospital.city}</span>
        </div>
        
        <p className="text-gray-600 text-sm mt-1">{hospital.address}</p>
        
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{hospital.rating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{hospital.distance} miles away</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {hospital.specialties.map((specialty) => (
            <span 
              key={specialty}
              className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-1" />
            {hospital.phone}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {hospital.waitTime} min wait
          </div>
        </div>
      </div>
    </div>
  );
}