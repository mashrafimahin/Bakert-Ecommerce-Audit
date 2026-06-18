/**
 * Product Controller (Redux Slice)
 *
 * Manages product catalog state from the API/handler.
 * Provides a reducer to add new reviews to a specific product.
 */

// dependencies
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { productHandler } from "../../handlers/productHandler";
// types
import type { CartItem } from "./globalController";

/** A single review entry attached to a product */
export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
}

/**
 * Extended product type that includes the reviewsList array.
 * Merges CartItem fields with Review metadata.
 */
export interface ProductWithReviews extends CartItem {
  reviewsList: Review[];
}

// initial state
interface ProductState {
  isLoading: boolean;
  error: boolean;
  message: string;
  allProducts: ProductWithReviews[];
  searchQuery: string;
  activeCategory: string;
}

const initialState: ProductState = {
  isLoading: false,
  error: false,
  message: "",
  allProducts: [],
  searchQuery: "",
  activeCategory: "All",
};

// data fetch thunk — fetches products from the handler
export const productThunk = createAsyncThunk("product/fetch", async () => {
  const result = await productHandler();
  return result ?? [];
});

// slice
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    /** Update the search query text */
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    /** Set the active category filter */
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },

    /**
     * Add a new review to a specific product's reviewsList.
     * Payload: { productId: string, review: Review }
     */
    addReview: (
      state,
      action: PayloadAction<{ productId: string; review: Review }>,
    ) => {
      const product = state.allProducts.find(
        (p) => p.id === action.payload.productId,
      );
      if (product) {
        product.reviewsList.unshift(action.payload.review);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        // Assign each item a default quantity of 1 for cart usage
        state.allProducts = action.payload.map((item) => ({
          ...item,
          quantity: 1,
        })) as ProductWithReviews[];
      })
      .addCase(productThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.error.message ?? "Something went wrong";
      });
  },
});

// exports
export default ProductSlice.reducer;
export const { setSearchQuery, setActiveCategory, addReview } =
  ProductSlice.actions;
