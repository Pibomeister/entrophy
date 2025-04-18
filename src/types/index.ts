export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: 'Basic' | 'Premium' | 'Luxury';
  imageUrl: string;
  features: string[];
  maxGuests: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  eventDate: string | null;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  tier: string;
}