// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import globalReducer from "../features/globalController";
import productReducer from "../features/productController";
import DashboardReducer from "../features/dashboardController";

export const store = configureStore({
  reducer: {
    globalController: globalReducer,
    productController: productReducer,
    dashboardController: DashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
