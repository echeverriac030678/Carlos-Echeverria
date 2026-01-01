export type Category = string; // Changed from union type to string to support dynamic categories

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  logoUrl?: string; // Optional custom logo URL
  logoHeight: number; // Navbar Logo height in pixels
  footerLogoHeight: number; // Footer Logo height in pixels
  primaryColor: 'green' | 'blue' | 'orange' | 'red';
  contactPhone: string;
  contactEmail: string;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: CartItem[];
  total: number;
  date: string;
}