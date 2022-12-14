export type Offer = {
  city: City;
  previewImage: string;
  images?: string[] | null;
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods?: string[] | null;
  host: Host;
  description: string;
  location: Location;
  id: number;
};
export type City = {
  name: string;
  location: Location;
};
export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Point = Omit<Location, 'zoom'> & {
  id: number;
};
