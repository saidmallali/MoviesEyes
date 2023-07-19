import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";
import convertToMilliscond from "../utilities/convertToMilliscond";

const apiClient = new APIClient<Movie>("/movie/upcoming");

const useUpcomingMovies = () =>
  useQuery({
    queryKey: ["upcoming"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default useUpcomingMovies;
