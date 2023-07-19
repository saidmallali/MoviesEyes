import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";
import convertToMilliscond from "../utilities/convertToMilliscond";

const apiClient = new APIClient<Movie>("/movie/now_playing");

const useNowPlayingMovies = () =>
  useQuery({
    queryKey: ["now playing"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default useNowPlayingMovies;
