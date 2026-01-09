export type Category = string; // Changed from union type to string to support dynamic categories

export interface ProductVariant {
  id: string;
  name: string; // e.g. "Pequeño", "Grande", "Rojo", "Modelo A"
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Base price or price of the first variant
  category: Category;
  imageUrl: string;
  stock: number; // Total stock or stock of the base product
  variants?: ProductVariant[]; // Optional list of variants
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant; // Store specific variant details if selected
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
  taxRate: number; // New: Tax percentage (e.g., 7 for 7%)
  
  // Social & Location (New)
  instagramUrl?: string;
  whatsappNumber?: string;
  mapEmbedUrl?: string; // URL for the iframe src
  locationInstructions?: string;

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