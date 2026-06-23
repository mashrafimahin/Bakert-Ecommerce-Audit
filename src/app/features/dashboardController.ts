// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dashboardHandler } from "../../handlers/dashboardHandler";
// interface/@types
import type { CartItem } from "./globalController";
type ViewState = "order" | "favorite" | "settings";

interface ProductState {
  isLoading: boolean;
  viewState: ViewState;
  orderHistory: CartItem[];
  favoriteHistory: CartItem[];
}

const initialState: ProductState = {
  isLoading: false,
  viewState: "order",
  orderHistory: [],
  favoriteHistory: [],
};

// data fetch thunk — fetches products from the handler
export const dashboardThunk = createAsyncThunk("data/dashboard", async () => {
  const result = await dashboardHandler();
  return result ?? { orders: [], favorites: [] };
});

// slice
const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    handleView: (state, action) => {
      state.viewState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dashboardThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dashboardThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderHistory = action.payload.orders || [];
        state.favoriteHistory = action.payload.favorites || [];
      })
      .addCase(dashboardThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// exports
export default DashboardSlice.reducer;
export const { handleView } = DashboardSlice.actions;
