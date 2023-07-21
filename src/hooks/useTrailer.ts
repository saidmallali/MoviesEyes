import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { Genre } from "../entities/genre";

const useTrailer = (id: number) => {
  const apiClient = new APIClient<Genre>(`movie/${id}/videos`);
  return useQuery({
    queryKey: ["trailer", id],
    queryFn: apiClient.getTrailer,
    staleTime: convertToMilliscond("24h"),
  });
};

export default useTrailer;
