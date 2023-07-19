import useAiringTodayTv from "../hooks/useAiringTodayTv";
import { Spinner } from "@chakra-ui/react";
import MediaList from "./MediaList";

const AiringTodayTvSeries = () => {
  const { data, isLoading, error } = useAiringTodayTv();

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return <MediaList heading="Airing To Day Series" series={data?.results} />;
};

export default AiringTodayTvSeries;
