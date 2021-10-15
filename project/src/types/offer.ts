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

type City = {
  location: Location;
  name: string;
}

type Offer = {
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
  city: City;
  location: Location;
  host: Host;
}

export type Offers = Offer[]
