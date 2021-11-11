type Host = {
  avatarUrl: string;
  id: number;
  isPremium: boolean;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
}

export type Offer = {
  type: string;
  title: string;
  rating: number;
  price: number;
  previewImage: string;
  maxGuests: number;
  bedrooms: number;
  goods: string[];
  description: string;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  isActive: boolean;
  city: City;
  location: Location;
  host: Host;
}

export type Offers = Offer[]
