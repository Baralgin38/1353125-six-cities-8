import {Offers} from '../types/offer';
import {city} from './city';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offers = [
  {
    type: 'apartment',
    title: 'Beautiful & luxurious apartment at great location',
    rating: 4,
    price: 423,
    previewImage: 'img/apartment-01.jpg',
    maxGuests: 3,
    bedrooms: 2,
    goods: ['Wifi', 'Cable TV', 'Dishwasher'],
    description: 'Beautiful apartment in Amsterdam, with all the necessary amenities and an excellent location.',
    id: 45,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    isActive: false,
    city,
    location: {
      latitude: 52.390,
      longitude: 4.853,
      zoom: 8,
    },
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 7,
      isPremium: false,
      name: 'Max',
    },
  },

  {
    type: 'room',
    title: 'Spacious and cozy room',
    rating: 5,
    price: 350,
    previewImage: 'img/room.jpg',
    maxGuests: 2,
    bedrooms: 1,
    goods: ['Wifi', 'Cable TV', 'Dishwasher', 'Coffee machine'],
    description: 'Great apartment for a couple, located in the historic center of Amsterdam.',
    id: 12,
    images: [
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    isActive: false,
    city,
    location: {
      latitude: 52.369,
      longitude: 4.853,
      zoom: 8,
    },
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPremium: false,
      name: 'Alex',
    },
  },

  {
    type: 'house',
    title: 'nice house, for a big company.',
    rating: 5,
    price: 558,
    previewImage: 'img/apartment-03.jpg',
    maxGuests: 6,
    bedrooms: 4,
    goods: ['Wifi', 'Cable TV', 'Dishwasher', 'Coffee machine', 'Kitchen', 'Washing machine'],
    description: `A large and spacious house, with all amenities, for your large company.
    The house was built just a couple of years ago.`,
    id: 2,
    images: [
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    isActive: true,
    city,
    location: {
      latitude: 52.390,
      longitude: 4.929,
      zoom: 8,
    },
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 8,
      isPremium: true,
      name: 'Sasha',
    },
  },

  {
    type: 'hotel',
    title: 'A good hotel to relax after walking around Amsterdam.',
    rating: 3,
    price: 240,
    previewImage: 'img/apartment-02.jpg',
    maxGuests: 3,
    bedrooms: 2,
    goods: ['Wifi', 'Cable TV', 'Dishwasher', 'Coffee machine', 'Kitchen', 'Washing machine'],
    description: 'A fairly comfortable hotel, with all the necessary amenities for a normal stay.',
    id: 9,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    isActive: false,
    city,
    location: {
      latitude: 52.380,
      longitude: 4.939,
      zoom: 8,
    },
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 74,
      isPremium: false,
      name: 'Julia',
    },
  },
];
