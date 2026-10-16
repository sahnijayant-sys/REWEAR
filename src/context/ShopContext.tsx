import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, FilterState, ActivePage, OrderDetails } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  activePage: ActivePage;
  selectedProductId: string | null;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isCheckoutOpen: boolean;
  activePolicyModal: 'shipping' | 'grading' | 'privacy' | null;
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  filters: FilterState;
  orders: OrderDetails[];
  
  // Navigation & View Actions
  navigateTo: (page: ActivePage, initialFilter?: Partial<FilterState>) => void;
  openProduct: (productId: string) => void;
  setActivePolicyModal: (modal: 'shipping' | 'grading' | 'privacy' | null) => void;
  
  // Cart Actions
  addToCart: (productId: string, openDrawer?: boolean) => boolean;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setIsCartOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  
  // Wishlist Actions
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  moveToCartFromWishlist: (productId: string) => void;
  
  // Search & Filter Actions
  setIsSearchOpen: (open: boolean) => void;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  
  // Checkout
  processOrder: (details: Omit<OrderDetails, 'orderId' | 'createdAt'>) => OrderDetails;
  
  // Toast
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const DEFAULT_FILTERS: FilterState = {
  category: 'All',
  collection: 'All',
  mood: 'All',
  condition: 'All',
  size: 'All',
  color: 'All',
  minPrice: 0,
  maxPrice: 5000,
  searchQuery: '',
  sortBy: 'featured'
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    // Check if we have sold out items in localStorage
    const savedSold = localStorage.getItem('rewear_sold_ids');
    if (savedSold) {
      try {
        const soldIds: string[] = JSON.parse(savedSold);
        return PRODUCTS.map(p => soldIds.includes(p.id) ? { ...p, stockQuantity: 0 } : p);
      } catch {
        return PRODUCTS;
      }
    }
    return PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('rewear_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('rewear_wishlist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [orders, setOrders] = useState<OrderDetails[]>(() => {
    const saved = localStorage.getItem('rewear_orders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<'shipping' | 'grading' | 'privacy' | null>(null);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('rewear_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('rewear_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Sync orders to localStorage
  useEffect(() => {
    localStorage.setItem('rewear_orders', JSON.stringify(orders));
  }, [orders]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(prev => (prev?.message === message ? null : prev));
    }, 3200);
  };

  const navigateTo = (page: ActivePage, initialFilter?: Partial<FilterState>) => {
    if (initialFilter) {
      setFilters(prev => ({
        ...prev,
        ...initialFilter
      }));
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const addToCart = (productId: string, openDrawer: boolean = true): boolean => {
    const targetProduct = products.find(p => p.id === productId);
    if (!targetProduct) return false;

    if (targetProduct.stockQuantity <= 0) {
      showToast('This one-of-a-kind piece is already sold out', 'error');
      return false;
    }

    const existingIndex = cart.findIndex(item => item.product.id === productId);

    if (existingIndex > -1) {
      // For one of a kind items, check max stock
      const currentQty = cart[existingIndex].quantity;
      if (currentQty >= targetProduct.stockQuantity) {
        showToast('Only 1 unit available for this unique piece', 'info');
        if (openDrawer) setIsCartOpen(true);
        return false;
      }
      setCart(prev =>
        prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart(prev => [...prev, { product: targetProduct, quantity: 1 }]);
    }

    showToast(`Added "${targetProduct.name}" to your shopping bag`, 'success');
    if (openDrawer) {
      setIsCartOpen(true);
    }
    return true;
  };

  const removeFromCart = (productId: string) => {
    const item = cart.find(i => i.product.id === productId);
    setCart(prev => prev.filter(i => i.product.id !== productId));
    if (item) {
      showToast(`Removed "${item.product.name}" from shopping bag`, 'info');
    }
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const targetProduct = products.find(p => p.id === productId);
    if (!targetProduct) return;

    if (quantity > targetProduct.stockQuantity) {
      showToast(`Only ${targetProduct.stockQuantity} item available`, 'info');
      return;
    }

    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      showToast(`Removed from your wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, productId]);
      showToast(`Saved "${product.name}" to your wishlist`, 'success');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const moveToCartFromWishlist = (productId: string) => {
    const added = addToCart(productId, true);
    if (added) {
      setWishlist(prev => prev.filter(id => id !== productId));
    }
  };

  const processOrder = (details: Omit<OrderDetails, 'orderId' | 'createdAt'>): OrderDetails => {
    const newOrderId = `RW-${Math.floor(100000 + Math.random() * 900000)}`;
    const fullOrder: OrderDetails = {
      ...details,
      orderId: newOrderId,
      createdAt: new Date().toISOString()
    };

    // Mark purchased items as sold out
    const purchasedIds = details.items.map(i => i.product.id);
    const updatedProducts = products.map(p =>
      purchasedIds.includes(p.id) ? { ...p, stockQuantity: 0 } : p
    );
    setProducts(updatedProducts);

    // Save sold IDs in localStorage
    const currentSold = JSON.parse(localStorage.getItem('rewear_sold_ids') || '[]');
    const newSold = Array.from(new Set([...currentSold, ...purchasedIds]));
    localStorage.setItem('rewear_sold_ids', JSON.stringify(newSold));

    // Save order
    setOrders(prev => [fullOrder, ...prev]);

    // Clear cart
    clearCart();
    setIsCartOpen(false);

    return fullOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        activePage,
        selectedProductId,
        isCartOpen,
        isSearchOpen,
        isCheckoutOpen,
        activePolicyModal,
        toast,
        filters,
        orders,
        navigateTo,
        openProduct,
        setActivePolicyModal,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        setIsCartOpen,
        setIsCheckoutOpen,
        toggleWishlist,
        isInWishlist,
        moveToCartFromWishlist,
        setIsSearchOpen,
        setFilters,
        resetFilters,
        processOrder,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
