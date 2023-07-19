import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MediaList from "./MediaList";
const TopRatedMovies = () => {
  const { data, isLoading, error } = useTopRatedMovies();

  if (error) throw error;
  return (
    <MediaList
      isLoading={isLoading}
      heading="Top Rated Movies"
      movies={data?.results}
    />
  );
};

export default TopRatedMovies;
