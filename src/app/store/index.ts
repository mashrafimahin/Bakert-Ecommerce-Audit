// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import globalReducer from "../features/globalController";

export const store = configureStore({
  reducer: {
    globalController: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
