import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { TvShow } from "../entities/TvShow";

const useSerieDetails = (id: number | undefined, name: string | undefined) => {
  const apiClient = new APIClient<TvShow>(`/tv/${id}`);
  return useQuery({
    queryKey: [name, id],
    queryFn: apiClient.getDetails,
    staleTime: convertToMilliscond("24h"),
  });
};

export default useSerieDetails;
