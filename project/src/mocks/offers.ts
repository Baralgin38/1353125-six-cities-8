import {Offers} from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const PREVIEW_IMGAGE = 'http://picsum.photos/248/152';

export const offers: Offers = [
  {
    type: 'apartment',
    title: 'Beautiful & luxurious apartment at great location',
    rating: 4,
    price: 423,
    previewImage: `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    maxGuests: 3,
    bedrooms: 2,
    goods: ['Wifi', 'Cable TV', 'Dishwasher'],
    description: 'Beautiful apartment in Amsterdam, with all the necessary amenities and an excellent location.',
    id: 45,
    images: [
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    ],
    isFavorite: true,
    isPremium: false,
    city: {
      location: {
        latitude: 52.36,
        longitude: 54.87,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 23.14,
      longitude: 21.25,
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
    previewImage: `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    maxGuests: 2,
    bedrooms: 1,
    goods: ['Wifi', 'Cable TV', 'Dishwasher', 'Coffee machine'],
    description: 'Great apartment for a couple, located in the historic center of Brussels.',
    id: 12,
    images: [
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    ],
    isFavorite: false,
    isPremium: false,
    city: {
      location: {
        latitude: 14.25,
        longitude: 10.47,
        zoom: 10,
      },
      name: 'Brussels',
    },
    location: {
      latitude: 41.21,
      longitude: 11.25,
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
    previewImage: `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    maxGuests: 6,
    bedrooms: 4,
    goods: ['Wifi', 'Cable TV', 'Dishwasher', 'Coffee machine', 'Kitchen', 'Washing machine'],
    description: `A large and spacious house, with all amenities, for your large company.
    The house was built just a couple of years ago.`,
    id: 2,
    images: [
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    ],
    isFavorite: true,
    isPremium: true,
    city: {
      location: {
        latitude: 87.69,
        longitude: 78.45,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    location: {
      latitude: 55.87,
      longitude: 41.28,
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
    title: 'A good hotel to relax after walking around Paris.',
    rating: 3,
    price: 240,
    previewImage: `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    maxGuests: 3,
    bedrooms: 2,
    goods: ['Wifi', 'Cable TV', 'Dishwasher', 'Coffee machine', 'Kitchen', 'Washing machine'],
    description: 'A fairly comfortable hotel, with all the necessary amenities for a normal stay.',
    id: 9,
    images: [
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
      `${PREVIEW_IMGAGE}?rnd=${Math.random()}`,
    ],
    isFavorite: false,
    isPremium: false,
    city: {
      location: {
        latitude: 77.55,
        longitude: 40.25,
        zoom: 10,
      },
      name: 'Paris',
    },
    location: {
      latitude: 99.87,
      longitude: 78.28,
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
