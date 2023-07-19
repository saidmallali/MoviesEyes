import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { TvShow } from "../entities/TvShow";

const apiClient = new APIClient<TvShow>("/tv/top_rated");

const useTopRatedTvSeries = () =>
  useQuery({
    queryKey: ["Top rated Series"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default useTopRatedTvSeries;
