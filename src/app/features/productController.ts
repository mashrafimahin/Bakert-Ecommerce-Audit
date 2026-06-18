// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productHandler } from "../../handlers/productHandler";
// types
import type { CartItem } from "./globalController";
// initial state
interface ProductState {
  isLoading: boolean;
  error: boolean;
  message: string;
  allProducts: CartItem[];
}

const initialState: ProductState = {
  isLoading: false,
  error: false,
  message: "",
  allProducts: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(productThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload.map((item) => ({
        ...item,
        quantity: 1,
      }));
    });
    builder.addCase(productThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message ?? "Something went wrong";
    });
  },
});

// exports
export default ProductSlice.reducer;
