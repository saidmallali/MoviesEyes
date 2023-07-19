import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { TvShow } from "../entities/TvShow";

const apiClient = new APIClient<TvShow>("/tv/popular");

const usePopularTvSeries = () =>
  useQuery({
    queryKey: ["Popular Tv Series"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default usePopularTvSeries;
