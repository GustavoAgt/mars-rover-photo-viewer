import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../slices/photos.slice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
