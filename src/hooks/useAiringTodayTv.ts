import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { TvShow } from "../entities/TvShow";

const apiClient = new APIClient<TvShow>("/tv/airing_today");

const useAiringTodayTv = () =>
  useQuery({
    queryKey: ["tv Airing Today"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default useAiringTodayTv;
