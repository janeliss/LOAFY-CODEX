import { createContext, useMemo, useState, type ReactNode } from 'react';
import { products } from '../data/products';

export type CartItem = { id: string; quantity: number };

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: number;
};

const storageKey = 'loafy-cart-v1';

const getInitial = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(getInitial);
  const [isOpen, setIsOpen] = useState(false);

  const persist = (next: CartItem[]) => {
    setItems(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const addItem = (id: string) => {
    const existing = items.find((item) => item.id === id);
    if (existing) {
      persist(items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      persist([...items, { id, quantity: 1 }]);
    }
    setIsOpen(true);
  };

  const removeItem = (id: string) => persist(items.filter((item) => item.id !== id));
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return removeItem(id);
    persist(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const total = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.id);
        return sum + (product?.price ?? 0) * item.quantity;
      }, 0),
    [items]
  );

  const value = { items, isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false), addItem, removeItem, updateQuantity, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
