import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMoviesDeatails";
import { Container } from "@chakra-ui/react";
import MovieAttributes from "../components/MovieAttributes";

const DetailPage = () => {
  const { id, name } = useParams();
  let movieId = 0;
  if (id) movieId = parseInt(id);
  const { data, isLoding, error } = useMovieDetails(movieId, name);

  console.log(data);
  console.log(id, name);
  if (error) throw error;
  return <Container>{data && <MovieAttributes movie={data} />}</Container>;
};

export default DetailPage;
