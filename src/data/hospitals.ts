// src/data/hospitals.ts
import { Hospital } from '../types/hospital';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Jyoti Hospital',
    address: 'KURUDA, Balasore, Odisha 756056',
    city: 'Balasore',
    distance: 3,  // in kilometers
    rating: 4.8,
    specialties: ['Emergency Care', 'Cardiology', 'Neurology'],
    emergency: true,
    phone: '06782 256 375',
    image: 'https://www.joonsquare.com/usermanage/image/business/jyothi-hospital-balasore-12183/jyothi-hospital-balasore-jyothi-hospital-004.jpg',
    waitTime: 15
  },
  {
    id: '2',
    name: 'District Headquarters Hospital (DHH) Balasore',
    address: 'OT Road, Near Kacheri Bazaar, Balasore, Odisha 756001',
    city: 'Balasore',
    distance: 0.5,  // in kilometers
    rating: 4.3,
    specialties: ['Cardiology', 'Urology', 'Pulmonology'],
    emergency: true,
    phone: '6782 262 101',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2h2urZlhcI_w5udoMzJI_TEhx-jLvCnkmNg&s',
    waitTime: 20
  },
  {
    id: '3',
    name: 'Balasore Bhadrak District Co-Operative Hospital',
    address: 'OT Road, Remuna, Balasore, Odisha 756019',
    city: 'Chicago',
    distance: 2.5,  // in kilometers
    rating: 4.4,
    specialties: ['General medicine', 'gynecology', 'pediatrics', 'pathology'],
    emergency: true,
    phone: '+91 6782 241 489',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    waitTime: 25
  },
  {
    id: '4',
    name: 'Apollo Clinic Balasore',
    address: 'Near DIC Office, OT Road, Balasore, Odisha 756001',
    city: 'Balasore',
    distance: 10,  // in kilometers
    rating: 3.7,
    specialties: ['Emergency Care', 'diagnostics', 'Pediatrics'],
    emergency: true,
    phone: '91 6782 242 611',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ch1qmUuQ-gHVEqqH6w_VMAL7Re3EeuH12w&s',
    waitTime: 10
  },
  {
    id: '5',
    name: 'Ayush Multi Specialty Hospital',
    address: 'Vivekananda Marg, OT Road, Balasore, Odisha 756001',
    city: 'Balasore',
    distance: 7.5,  // in kilometers
    rating: 2.4,
    specialties: ['General medicine', 'gynecology', 'pediatrics'],
    emergency: false,
    phone: '91 83379 99999',

    image: 'https://content.jdmagicbox.com/v2/comp/hyderabad/t7/040pxx40.xx40.190930122123.x9t7/catalogue/aayush-multi-speciality-hospital-hyderabad-ade9ylmsio.jpg',
    waitTime: 7
  },
  {
    id: '6',
    name: 'Central Hospital',
    address: 'OT Road, Remuna, Balasore, Odisha 756019',
    city: 'Balasore',
    distance: 2.5,  // in kilometers
    rating: 4.4,
    specialties: ['General medicine', 'gynecology', 'pediatrics', 'pathology'],
    emergency: true,
    phone: '+91 6782 241 160',
    image: 'https://eangae.net/wp-content/uploads/2023/01/Jyoti-ICU.jpeg',
    waitTime: 7
  },
  {
    id: '7',
    name: 'Red Cross Hospital',
    address: 'Red Cross Building, OT Road, Near Gandhi Smruti Bhawan, Balasore, Odisha 756001',
    city: 'Balasore',
    distance: 5.5,  // in kilometers
    rating: 3.2,
    specialties: ['General medicine'],
    emergency: false,
    phone: '6782 262 024',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8JN2YrJRP1P8zFLxDYHwQI-KCr0VZ6o00omqi9zhyUEO6du8-_AQ88mRhgaHfoqjSBQ&usqp=CAU',
    waitTime: 13
  },
  {
    id: '8',
    name: 'Sun Hospital',
    address: 'Near Fakir Mohan College Road, Balasore, Odisha 756001',
    city: 'Balasore',
    distance: 1.5,  // in kilometers
    rating: 3.4,
    specialties: [ 'gynecology', 'pediatrics'],
    emergency: false,
    phone: '6782 240 777',
    image: 'https://content.jdmagicbox.com/comp/cuttack/87/0671p671std30087/catalogue/sun-hospital-pvt-ltd-tulsipur-cuttack-hospitals-uha4irv57j.jpg',
    waitTime: 11
  },
];
