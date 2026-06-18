// types
import type { CartItem } from "../app/features/globalController";

const CART_STORAGE_KEY = "bakert_cart";

// save cart details to localStorage
export const saveCartToStorage = (cartDetails: CartItem[]): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartDetails));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

// load cart details from localStorage
export const loadCartFromStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as CartItem[];
    }
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
  }
  return [];
};
