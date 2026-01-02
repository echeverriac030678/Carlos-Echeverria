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

export interface HomeCategory {
  id: string;
  name: string;
  description: string;
  type: 'icon' | 'image';
  value: string; // Icon name (e.g., 'Wrench') or Image URL
}

export interface QuickLink {
  text: string;
  url: string;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  heroHeight: number; // New: Hero section height in pixels
  logoUrl?: string; // Optional custom logo URL
  logoHeight: number; // Navbar Logo height in pixels
  footerLogoHeight: number; // Footer Logo height in pixels
  primaryColor: 'green' | 'blue' | 'orange' | 'red';
  contactPhone: string;
  contactEmail: string;
  address: string; // New: Physical address
  
  // New: About Us Content
  companyDescription?: string;
  companyMission?: string;
  companyVision?: string;

  quickLinks: QuickLink[]; // New: Footer links
  homeCategories: HomeCategory[]; // New: Customizable home categories
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