// dependencies
import type { Review } from "../app/features/productController";
import type { CartItem } from "../app/features/globalController";
// interface/@types
export interface OrderDetails {
  info: {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    city: string;
    zip: string;
  };
  payment: {
    method: string;
    cardNumber?: number;
    expiryDate?: string;
    cvc?: number;
  };
  total: number;
  lists: CartItem[];
}

// add products as favorite
export const addFavorite = async (productId: string) => {
  try {
    const userId = localStorage.getItem("user_access");
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}/product/placeFavorite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
        credentials: "include",
      },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};

// remove product from favorites
export const removeFavorite = async (productId: string) => {
  try {
    const userId = localStorage.getItem("user_access");
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}/product/removeFavorite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
        credentials: "include",
      },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};

// post review
export const postNewReview = async (reviewData: Review) => {
  try {
    const userId = localStorage.getItem("user_access");
    await fetch(`${import.meta.env.VITE_API_KEY}/product/placeReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, ...reviewData }),
      credentials: "include",
    });
  } catch (err) {
    console.log(err);
  }
};

// checkout
export const checkoutPost = async (orderDetails: OrderDetails) => {
  try {
    const userId = localStorage.getItem("user_access");
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}/checkout/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, ...orderDetails }),
        credentials: "include",
      },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
