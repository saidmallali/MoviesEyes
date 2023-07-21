import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";
import convertToMilliscond from "../utilities/convertToMilliscond";

const useSimilarMovies = (id: number) => {
  const apiClient = new APIClient<Movie>(`/movie/${id}/similar`);
  return useQuery({
    queryKey: ["similar", id],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });
};

export default useSimilarMovies;
