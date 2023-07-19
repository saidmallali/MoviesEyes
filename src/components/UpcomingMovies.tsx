import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MediaList from "./MediaList";

const UpcomingMovies = () => {
  const { data, isLoading, error } = useUpcomingMovies();

  if (error) throw error;

  return (
    <MediaList
      isLoading={isLoading}
      heading="Upcoming Movies"
      movies={data?.results}
    />
  );
};

export default UpcomingMovies;
