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
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
}
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
  return result ?? { allItems: [], orderHistory: [], favProducts: [] };
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
        state.error = false;
        state.message = "";
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload.allItems;
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
