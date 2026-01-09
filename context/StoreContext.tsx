import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, SiteConfig, ProductVariant } from '../types';
import { INITIAL_PRODUCTS, INITIAL_SITE_CONFIG, CATEGORIES as INITIAL_CATEGORIES } from '../constants';

interface StoreContextType {
  products: Product[];
  categories: string[];
  cart: CartItem[];
  siteConfig: SiteConfig;
  addToCart: (product: Product, quantity: number, variant?: ProductVariant) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateCartQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  addCategory: (category: string) => void;
  updateSiteConfig: (config: SiteConfig) => void;
  getThemeClasses: () => any;
  resetStore: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Inicialización inteligente: Combina LocalStorage con los nuevos productos del código
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('ido_products');
      const savedProducts = saved ? JSON.parse(saved) : [];

      if (!Array.isArray(savedProducts) || savedProducts.length === 0) {
        return INITIAL_PRODUCTS;
      }

      // Fusionar: Mantener los existentes (por si se editaron precios) y agregar los NUEVOS del código
      const savedIds = new Set(savedProducts.map((p: any) => p.id));
      const newFromCode = INITIAL_PRODUCTS.filter(p => !savedIds.has(p.id));
      
      return [...savedProducts, ...newFromCode];
    } catch (error) {
      return INITIAL_PRODUCTS;
    }
  });

  const [categories, setCategories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ido_categories');
      const savedCategories = saved ? JSON.parse(saved) : [];

      if (!Array.isArray(savedCategories) || savedCategories.length === 0) {
        return INITIAL_CATEGORIES;
      }

      const newCategories = INITIAL_CATEGORIES.filter(c => !savedCategories.includes(c));
      return [...savedCategories, ...newCategories];
    } catch {
      return INITIAL_CATEGORIES;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ido_cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('ido_config');
      const parsed = saved ? JSON.parse(saved) : INITIAL_SITE_CONFIG;
      return { ...INITIAL_SITE_CONFIG, ...parsed };
    } catch { return INITIAL_SITE_CONFIG; }
  });

  // Persistencia automática
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

  // Lógica de Carrito
  const addToCart = (product: Product, quantity: number, variant?: ProductVariant) => {
    setCart(prev => {
      const existing = prev.find(item => 
        item.id === product.id && 
        (variant ? item.selectedVariant?.id === variant.id : !item.selectedVariant)
      );

      if (existing) {
        return prev.map(item => {
           const isMatch = item.id === product.id && 
                           (variant ? item.selectedVariant?.id === variant.id : !item.selectedVariant);
           return isMatch ? { ...item, quantity: item.quantity + quantity } : item;
        });
      }
      return [...prev, { ...product, quantity, selectedVariant: variant }];
    });
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setCart(prev => prev.filter(item => {
      const idMatch = item.id === productId;
      const variantMatch = variantId ? item.selectedVariant?.id === variantId : !item.selectedVariant;
      return !(idMatch && variantMatch);
    }));
  };

  const updateCartQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setCart(prev => prev.map(item => {
      const idMatch = item.id === productId;
      const variantMatch = variantId ? item.selectedVariant?.id === variantId : !item.selectedVariant;
      return (idMatch && variantMatch) ? { ...item, quantity } : item;
    }));
  };

  const clearCart = () => setCart([]);

  // Lógica de Inventario
  const addProduct = (product: Product) => setProducts(prev => [...prev, product]);
  const updateProduct = (updatedProduct: Product) => setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  const deleteProduct = (productId: string) => setProducts(prev => prev.filter(p => p.id !== productId));
  const addCategory = (category: string) => {
    if (!categories.includes(category)) setCategories(prev => [...prev, category]);
  };

  const updateSiteConfig = (config: SiteConfig) => setSiteConfig(config);

  const resetStore = () => {
    localStorage.removeItem('ido_products');
    localStorage.removeItem('ido_categories');
    localStorage.removeItem('ido_config');
    window.location.reload();
  };

  const getThemeClasses = () => {
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
      updateSiteConfig, getThemeClasses, resetStore
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