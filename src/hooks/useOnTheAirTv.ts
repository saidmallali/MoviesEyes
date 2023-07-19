import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { TvShow } from "../entities/TvShow";

const apiClient = new APIClient<TvShow>("/tv/on_the_air");

const useOnTheAirTV = () =>
  useQuery({
    queryKey: ["On The Air Tv Series"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
  });

export default useOnTheAirTV;
