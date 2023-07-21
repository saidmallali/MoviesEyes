import useSimilarMovies from "../hooks/useSimilarMovies";
import MediaList from "./MediaList";
import { Box } from "@chakra-ui/react";

interface Props {
  MovieId: number;
}
const SimilarMovies = ({ MovieId }: Props) => {
  const { data, isLoading, error } = useSimilarMovies(MovieId);

  if (error) throw error;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={"100%"}
      pl={6}
      pt={6}
    >
      <MediaList
        isLoading={isLoading}
        heading="Similar Movies"
        movies={data?.results}
      />
    </Box>
  );
};

export default SimilarMovies;
