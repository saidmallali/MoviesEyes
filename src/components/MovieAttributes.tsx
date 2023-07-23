import { Movie } from "../entities/Movie";
import DefinitionItem from "./DefinitionItem";
import { Box, Text } from "@chakra-ui/react";
import convertToTime from "../utilities/convertToTime";
import languages from "../data/languages";

interface Props {
  movie: Movie;
}

const MovieAttributes = ({ movie }: Props) => {
  const langue = languages.find((e) => e.iso_639_1 === movie.original_language);
  return (
    <Box as="dl" textAlign="end">
      <DefinitionItem term="RELEASE DATE">{movie.release_date}</DefinitionItem>
      <DefinitionItem term="LANGUE">{langue?.english_name}</DefinitionItem>
      <DefinitionItem term="GENRES">
        {movie.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="DUREE">
        {convertToTime(movie.runtime)}
      </DefinitionItem>
      <DefinitionItem term="BUDGET">{movie.budget} $</DefinitionItem>
    </Box>
  );
};

export default MovieAttributes;
