import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, SiteConfig } from '../types';
import { INITIAL_PRODUCTS, INITIAL_SITE_CONFIG, CATEGORIES as INITIAL_CATEGORIES } from '../constants';

interface StoreContextType {
  products: Product[];
  categories: string[];
  cart: CartItem[];
  siteConfig: SiteConfig;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  addCategory: (category: string) => void;
  updateSiteConfig: (config: SiteConfig) => void;
  getThemeClasses: () => any;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State initialization with localStorage persistence
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ido_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('ido_categories');
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('ido_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('ido_config');
    // Ensure new properties exist if loading from old local storage
    const parsed = saved ? JSON.parse(saved) : INITIAL_SITE_CONFIG;
    return { ...INITIAL_SITE_CONFIG, ...parsed };
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('ido_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('ido_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('ido_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ido_config', JSON.stringify(siteConfig));
  }, [siteConfig]);

  // Cart Logic
  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  // Inventory Logic
  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories(prev => [...prev, category]);
    }
  };

  // Config Logic
  const updateSiteConfig = (config: SiteConfig) => {
    setSiteConfig(config);
  };

  // Theme Helper
  const getThemeClasses = () => {
    // This connects to the THEME_COLORS constant, but imported dynamically to avoid circular dependencies if moved
    const color = siteConfig.primaryColor;
    const themes: any = {
      green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', btnHover: 'hover:bg-emerald-700' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500', btnHover: 'hover:bg-blue-700' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500', btnHover: 'hover:bg-orange-700' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
    };
    return themes[color] || themes.green;
  };

  return (
    <StoreContext.Provider value={{
      products, categories, cart, siteConfig,
      addToCart, removeFromCart, updateCartQuantity, clearCart,
      addProduct, updateProduct, deleteProduct, addCategory,
      updateSiteConfig, getThemeClasses
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};