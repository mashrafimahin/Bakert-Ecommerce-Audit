// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import globalReducer from "../features/globalController";
import productReducer from "../features/productController";

export const store = configureStore({
  reducer: {
    globalController: globalReducer,
    productController: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
