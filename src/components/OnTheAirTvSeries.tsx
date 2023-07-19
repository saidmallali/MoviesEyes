import useOnTheAirTV from "../hooks/useOnTheAirTv";
import MediaList from "./MediaList";

const OnTheAirTvSeries = () => {
  const { data, isLoading, error } = useOnTheAirTV();

  if (error) throw error;
  return (
    <MediaList
      isLoading={isLoading}
      heading="On The Air Series"
      series={data?.results}
    />
  );
};

export default OnTheAirTvSeries;
