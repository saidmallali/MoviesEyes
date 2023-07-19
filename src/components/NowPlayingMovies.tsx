import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MediaList from "./MediaList";

const NowPlayingMovies = () => {
  const { data, isLoading, error } = useNowPlayingMovies();

  if (error) throw error;
  return (
    <MediaList
      isLoading={isLoading}
      heading="Now Playing Movies"
      movies={data?.results}
    />
  );
};

export default NowPlayingMovies;
