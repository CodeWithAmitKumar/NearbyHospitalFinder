import { Hospital } from '../types/hospital';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Jyoti Hospital',
    address: '123 Healthcare Ave, Medical District',
    city: 'Balasore',
    distance: 0.8,
    rating: 4.8,
    specialties: ['Emergency Care', 'Cardiology', 'Neurology'],
    emergency: true,
    phone: '(555) 123-4567',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsXcb8-6TXrjgtotUPzjhQylBJyu3FipCsA&s',
    waitTime: 15
  },
  {
    id: '2',
    name: 'St. Mary\'s Medical Center',
    address: '456 Wellness Blvd, Healing Quarter',
    city: 'Boston',
    distance: 1.2,
    rating: 4.6,
    specialties: ['Pediatrics', 'Orthopedics', 'Oncology'],
    emergency: true,
    phone: '(555) 234-5678',
    image: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=1000',
    waitTime: 25
  },
  {
    id: '3',
    name: 'Riverside Community Hospital',
    address: '789 Care Lane, Riverside',
    city: 'Chicago',
    distance: 2.5,
    rating: 4.4,
    specialties: ['Family Medicine', 'Surgery', 'Mental Health'],
    emergency: false,
    phone: '(555) 345-6789',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    waitTime: 40
  },
  {
    id: '4',
    name: 'Metropolitan General Hospital',
    address: '321 Health Street',
    city: 'New York',
    distance: 1.5,
    rating: 4.7,
    specialties: ['Emergency Care', 'Surgery', 'Pediatrics'],
    emergency: true,
    phone: '(555) 456-7890',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000',
    waitTime: 20
  }
];