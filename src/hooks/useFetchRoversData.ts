import { useQuery } from "react-query";
import { httpGetCuriosityPhotos } from "../request/nasa.request";

export default function useFetchRoversData() {
  const { status, data, error, isFetching, isLoading } = useQuery(
    "fetchRoversData",
    async () => await httpGetCuriosityPhotos(),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000,
      staleTime: Infinity,
    }
  );

  return { status, data, error, isFetching, isLoading };
}
