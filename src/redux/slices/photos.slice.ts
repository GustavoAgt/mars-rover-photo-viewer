import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "../../types/photo.types";
import { RootState } from "../store/store";
import { generateCardInfo } from "./../../utils/generator";

type Photos = {
  photos?: Photo[];
  sliderValue: string;
  generatePhotos?: Photo[];
};

const initialState: Photos = {
  photos: [],
  sliderValue: "4",
  generatePhotos: [],
};

export const generateRoverPhotos = createAsyncThunk<
  Photo[],
  { numOfPics: string | undefined; photos: Photo[] }
>("photos/fetchByURI", async ({ numOfPics, photos }) => {
  return await generateCardInfo(numOfPics, photos);
});

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photos>) => {
      state.photos = action.payload.photos;
    },
    setGeneratedPhotos: (state, action: PayloadAction<Photos>) => {
      state.generatePhotos = action.payload.generatePhotos;
    },
    setPhotoSlide: (state, action: PayloadAction<Photos>) => {
      state.sliderValue = action.payload.sliderValue;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(generateRoverPhotos.fulfilled, (state, action) => {
      state.generatePhotos = action.payload;
    });
  },
});

export const getPhotosValue = (state: RootState) => state.photos;
export const { setPhotos } = photosSlice.actions;
export const { setPhotoSlide } = photosSlice.actions;
export const { setGeneratedPhotos } = photosSlice.actions;
export default photosSlice.reducer;
