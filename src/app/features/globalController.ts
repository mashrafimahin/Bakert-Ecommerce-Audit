// dependencies
import { createSlice } from "@reduxjs/toolkit";

// types
export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isNew: boolean;
  quantity: number;
}

// initial state
interface GlobalState {
  showPopup: boolean;
  cartCount: number;
  cartDetails: CartItem[];
  totalPrice: number;
}

const initialState: GlobalState = {
  showPopup: false,
  cartCount: 0,
  cartDetails: [],
  totalPrice: 0,
};

// slice
const GlobalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    handlePopup: (state) => {
      state.showPopup = !state.showPopup;
    },
    handleUpdate: (state, action) => {
      const item = state.cartDetails.find(
        (item) => item.id === action.payload.id,
      );
      if (!item) return;

      if (action.payload.type === "increment") {
        item.quantity += 1;
      } else if (item.quantity > 1 && action.payload.type === "decrement") {
        item.quantity -= 1;
      }

      state.totalPrice = state.cartDetails.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );
    },
    handleAddCart: (state, action) => {
      // check
      const item = state.cartDetails.find(
        (item) => item.id === action.payload.id,
      );
      if (item) return;
      // add
      state.cartDetails.push(action.payload);
      state.cartCount = state.cartDetails.length;
      state.totalPrice = state.cartDetails.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );
    },
    handleRemoveItem: (state, action) => {
      state.cartDetails = state.cartDetails.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartCount = state.cartDetails.length;
      state.totalPrice = state.cartDetails.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );
    },
  },
});

// exports
export default GlobalSlice.reducer;
export const { handlePopup, handleUpdate, handleAddCart, handleRemoveItem } =
  GlobalSlice.actions;
