"use client";

import { IProduct } from "@/types";
import React, { useEffect, createContext, useContext } from "react";

// Tipos de contexto
type CartContextType = {
  cart: Partial<IProduct>[];
  total: number;
  addToCart: (product: Partial<IProduct>) => void;
  removeItem: (productId: string) => void;
  isProductInCart: (productId: string) => boolean;
  resetCart: () => void;
};

// Claves de almacenamiento local
const CART_LOCAL_STORAGE_KEY = "cart";
const TOTAL_LOCAL_STORAGE_KEY = "total";

// Creación del contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del carrito
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = React.useState<CartContextType["cart"] | undefined>([]);
  const [total, setTotal] = React.useState<number>(0);

  // Agregar producto al carrito
  const addToCart = (product: Partial<IProduct>) => {
    setCart((prevCart) => [...(prevCart || []), product]);
    setTotal((prevTotal) => (prevTotal || 0) + 1);
  };

  // Remover producto del carrito
  const removeItem = (productId: string) => {
    setCart((prevCart) => {
      if (!prevCart) return [];
      return prevCart.filter((item) => String(item.id) !== productId);
    });

    setTotal((prevTotal) => (prevTotal === undefined || prevTotal <= 0 ? 0 : prevTotal - 1));
  };

  // Resetear carrito
  const resetCart = () => {
    setCart([]);
    setTotal(0);
    localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
    localStorage.removeItem(TOTAL_LOCAL_STORAGE_KEY);
  };

  // Verificar si un producto está en el carrito
  const isProductInCart = (productId: string) => {
    return cart ? cart.some((item) => String(item.id) === productId) : false;
  };

  // Guardar carrito en localStorage
  useEffect(() => {
    if (!cart) return;

    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(TOTAL_LOCAL_STORAGE_KEY, JSON.stringify(total || 0));
  }, [cart, total]);

  // Recuperar carrito desde localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    const storedTotal = localStorage.getItem(TOTAL_LOCAL_STORAGE_KEY);

    if (!storedCart || !storedTotal) {
      setCart([]);
      setTotal(0);
      return;
    }

    setCart(JSON.parse(storedCart));
    setTotal(JSON.parse(storedTotal));
  }, []);

  return (
    <CartContext.Provider value={{ cart: cart || [], total: total || 0, addToCart, removeItem, isProductInCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};