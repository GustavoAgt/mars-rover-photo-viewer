import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../slices/slide.slice";

export const store = configureStore({
  reducer: {
    slide: slideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
