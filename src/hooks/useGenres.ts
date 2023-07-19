import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { Genre } from "../entities/genre";

const apiClient = new APIClient<Genre>("/genre/movie/list");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getGeners,
    staleTime: convertToMilliscond("24h"),
  });

export default useGenres;
