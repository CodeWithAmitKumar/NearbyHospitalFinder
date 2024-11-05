export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  distance: number;
  rating: number;
  specialties: string[];
  emergency: boolean;
  phone: string;
  image: string;
  waitTime: number;
}

export type FilterOptions = {
  emergency: boolean;
  maxDistance: number;
  specialty: string;
  city: string;
}