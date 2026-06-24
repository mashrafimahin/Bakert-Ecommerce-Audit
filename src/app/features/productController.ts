// dependencies
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { productHandler } from "../../handlers/productHandler";
// types
import type { CartItem } from "./globalController";
export interface Review {
  id?: string;
  productId?: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
}
export type ProductWithReviews = CartItem;

// initial state
interface ProductState {
  isLoading: boolean;
  error: boolean;
  message: string;
  allProducts: ProductWithReviews[];
  reviews: Review[];
  searchQuery: string;
  activeCategory: string;
}

const initialState: ProductState = {
  isLoading: false,
  error: false,
  message: "",
  allProducts: [],
  reviews: [],
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
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    addReview: (
      state,
      action: PayloadAction<{
        productId: string;
        review: Omit<Review, "productId">;
      }>,
    ) => {
      const reviewWithProductId: Review = {
        ...action.payload.review,
        productId: action.payload.productId,
        date: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };
      state.reviews.unshift(reviewWithProductId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload;
        // state.message = "";
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
