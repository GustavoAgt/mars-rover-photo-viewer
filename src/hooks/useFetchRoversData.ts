import { useQuery } from "react-query";
import {
  generateRoverPhotos,
  setPhotos,
  setPhotoSlide,
} from "../redux/slices/photos.slice";
import { httpGetCuriosityPhotos } from "../request/nasa.request";
import { useAppDispatch } from "./app.hooks";

export default function useFetchRoversData() {
  const dispatch = useAppDispatch();

  const { status, data, error, isLoading } = useQuery(
    "fetchRoversData",
    async () => await httpGetCuriosityPhotos(),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000,
      staleTime: Infinity,

      onSuccess: (data) => {
        const MAX = 6;
        const MIN = 4;
        const SLIDER_DEFAULT = String(
          Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
        );
        dispatch(
          setPhotos({ photos: data?.data?.photos, sliderValue: SLIDER_DEFAULT })
        );
        dispatch(
          generateRoverPhotos({
            numOfPics: SLIDER_DEFAULT,
            photos: data?.data?.photos,
          })
        );
        dispatch(setPhotoSlide({ sliderValue: SLIDER_DEFAULT }));
      },
    }
  );

  return { status, data, error, isLoading };
}
