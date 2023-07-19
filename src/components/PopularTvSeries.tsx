import usePopularTvSeries from "../hooks/usePopularTvSeries";
import MediaList from "./MediaList";

const PopularTvSeries = () => {
  const { data, isLoading, error } = usePopularTvSeries();

  if (error) throw error;
  return (
    <MediaList
      isLoading={isLoading}
      heading="Popular Tv Series"
      series={data?.results}
    />
  );
};

export default PopularTvSeries;
