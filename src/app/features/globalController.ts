// dependencies
import { createSlice } from "@reduxjs/toolkit";

// utils
import {
  loadCartFromStorage,
  saveCartToStorage,
} from "../../utils/cartStorage";

// types
export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating?: number;
  reviews?: number;
  image: string;
  isNew?: boolean;
  quantity?: number;
  orderedDate?: string;
  status?: string;
}

// initial state
interface GlobalState {
  showPopup: boolean;
  showNotification: boolean;
  notificationType: string;
  notificationMessage: string;
  cartCount: number;
  cartDetails: CartItem[];
  totalPrice: number;
}

// load cart data
const cartFromStorage = loadCartFromStorage();

const initialState: GlobalState = {
  showPopup: false,
  showNotification: false,
  notificationMessage: "test passed",
  notificationType: "success",
  cartCount: cartFromStorage.length,
  cartDetails: cartFromStorage,
  totalPrice: cartFromStorage.reduce(
    (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
    0,
  ),
};

// slice
const GlobalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    handlePopup: (state) => {
      state.showPopup = !state.showPopup;
    },
    handleNotification: (state, action) => {
      state.showNotification = true;
      state.notificationType = action.payload.type;
      state.notificationMessage = action.payload.message;
    },
    hideNotification: (state) => {
      state.showNotification = false;
      state.notificationType = "success";
      state.notificationMessage = "Empty String.";
    },
    handleUpdate: (state, action) => {
      const item = state.cartDetails.find(
        (item) => item.id === action.payload.id,
      );
      if (!item) return;

      if (action.payload.type === "increment") {
        item.quantity = (item.quantity ?? 0) + 1;
      } else if (
        (item.quantity ?? 0) > 1 &&
        action.payload.type === "decrement"
      ) {
        item.quantity = (item.quantity ?? 0) - 1;
      }

      state.totalPrice = state.cartDetails.reduce(
        (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
        0,
      );

      saveCartToStorage(state.cartDetails);
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
        (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
        0,
      );

      saveCartToStorage(state.cartDetails);
    },
    handleRemoveItem: (state, action) => {
      state.cartDetails = state.cartDetails.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartCount = state.cartDetails.length;
      state.totalPrice = state.cartDetails.reduce(
        (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
        0,
      );

      saveCartToStorage(state.cartDetails);
    },
  },
});

// exports
export default GlobalSlice.reducer;
export const {
  handlePopup,
  handleNotification,
  hideNotification,
  handleUpdate,
  handleAddCart,
  handleRemoveItem,
} = GlobalSlice.actions;
