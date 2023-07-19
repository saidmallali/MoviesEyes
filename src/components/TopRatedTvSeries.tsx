import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";
import MediaList from "./MediaList";

const PopularTvSeries = () => {
  const { data, isLoading, error } = useTopRatedTvSeries();

  if (error) throw error;
  return (
    <MediaList
      isLoading={isLoading}
      heading="Top Rated Tv Series"
      series={data?.results}
    />
  );
};

export default PopularTvSeries;
