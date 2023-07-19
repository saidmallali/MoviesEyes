import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";
import convertToMilliscond from "../utilities/convertToMilliscond";

const apiClient = new APIClient<Movie>("/movie/popular");

const usePopularMovies = () =>
  useQuery({
    queryKey: ["popular"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default usePopularMovies;
