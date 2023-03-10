import { ChangeEvent, FC } from "react";
import styled from "@emotion/styled";
import mars from "../../resources/images/mars.png";
import {
  generateRoverPhotos,
  setPhotoSlide,
} from "../../redux/slices/photos.slice";
import { useAppDispatch, useAppSelector } from "../../hooks/app.hooks";

const StyledSlide = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1.5rem;
  border-radius: 0.5rem;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 3.4rem;
    height: 3.4rem;
    border: 0;
    background: url(${() => mars});
    cursor: pointer;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &::-moz-range-thumb {
    width: 3.3rem;
    height: 3.5rem;
    border: 0;
    background: url(${() => mars});
    cursor: pointer;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

type Props = {
  value: string;
};

const Slider: FC<Props> = ({ value }) => {
  const photosState = useAppSelector((state) => state.photos);

  const dispatch = useAppDispatch();

  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhotoSlide({ sliderValue: event.target.value }));
    dispatch(
      generateRoverPhotos({
        numOfPics: event.target.value,
        photos: photosState.photos as any,
      })
    );
  };

  return (
    <StyledSlide
      type="range"
      min="4"
      max="6"
      value={value}
      onChange={onChangeRange}
    />
  );
};

export default Slider;
