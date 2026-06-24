// dependencies
import type { Review } from "../app/features/productController";

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
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}/product/placeReview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, ...reviewData }),
        credentials: "include",
      },
    );
    const data = await response.json();
    console.log(data);
    // response
    // return refinedData;
  } catch (err) {
    console.log(err);
  }
};
