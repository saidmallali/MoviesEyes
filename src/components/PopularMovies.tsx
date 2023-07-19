import usePopularMovies from "../hooks/usePopularMovies";
import MediaList from "./MediaList";

const PopularMovies = () => {
  const { data, isLoading, error } = usePopularMovies();

  if (error) throw error;

  return (
    <MediaList
      isLoading={isLoading}
      heading="Popular Movies"
      movies={data?.results}
    />
  );
};

export default PopularMovies;
