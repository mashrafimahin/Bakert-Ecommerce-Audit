// dependencies
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { productHandler } from "../../handlers/productHandler";
// types
import type { CartItem } from "./globalController";
// initial state
interface ProductState {
  isLoading: boolean;
  error: boolean;
  message: string;
  allProducts: CartItem[];
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

// data fetch thunk
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload.map((item) => ({
          ...item,
          quantity: 1,
        }));
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
export const { setSearchQuery, setActiveCategory } = ProductSlice.actions;
