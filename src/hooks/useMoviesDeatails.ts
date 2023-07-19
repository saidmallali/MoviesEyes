import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { Movie } from "../entities/Movie";

const useMovieDetails = (id: number | undefined, name: string | undefined) => {
  const apiClient = new APIClient<Movie>(`/movie/${id}`);
  return useQuery({
    queryKey: [name, id],
    queryFn: apiClient.getMovieDetails,
    staleTime: convertToMilliscond("24h"),
  });
};

export default useMovieDetails;
