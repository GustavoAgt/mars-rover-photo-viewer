import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type Slide = {
  value: string;
};

const initialState: Slide = {
  value: "4",
};

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    setSlideValue: (state, action: PayloadAction<Slide>) => {
      state.value = action.payload.value;
    },
  },
});

export const getSlideValue = (state: RootState) => state.slide;
export const { setSlideValue } = slideSlice.actions;
export default slideSlice.reducer;
