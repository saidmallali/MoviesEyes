import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMoviesDeatails";
import { Box, Spinner } from "@chakra-ui/react";
import HeroDetailPage from "../components/HeroDetailPage";
import VideoTrailer from "../components/VideoTrailer";
import useTrailer from "../hooks/useTrailer";
import SimilarMovies from "../components/SimilarMovies";

const DetailPage = () => {
  const { id, name } = useParams();
  let movieId = 0;
  if (id) movieId = parseInt(id);
  const { data, isLoading, error } = useMovieDetails(movieId, name);
  const { data: trailer } = useTrailer(movieId);

  if (isLoading) return <Spinner />;
  if (!data) return null;
  if (error) throw error;
  if (!trailer) return null;

  return (
    <>
      <Box>
        <HeroDetailPage data={data} />
        {trailer && <VideoTrailer keyTrailer={trailer?.results[1].key} />}
        <SimilarMovies MovieId={data.id} />
      </Box>
    </>
  );
};

export default DetailPage;
