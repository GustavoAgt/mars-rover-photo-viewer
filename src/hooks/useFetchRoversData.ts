import { useQuery } from "react-query";
import { generateRoverPhotos, setPhotos } from "../redux/slices/photos.slice";
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
        const SLIDER_DEFAULT = "4";
        dispatch(
          setPhotos({ photos: data?.data?.photos, sliderValue: SLIDER_DEFAULT })
        );
        dispatch(
          generateRoverPhotos({
            numOfPics: SLIDER_DEFAULT,
            photos: data?.data?.photos,
          })
        );
      },
    }
  );

  return { status, data, error, isLoading };
}
