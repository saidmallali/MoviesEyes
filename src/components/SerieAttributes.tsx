import { Box, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import { TvShow } from "../entities/TvShow";
import languages from "../data/languages";

interface Props {
  serie: TvShow;
}

const SerieAttributes = ({ serie }: Props) => {
  const langue = languages.find((e) => e.iso_639_1 === serie.original_language);

  if (!serie) return null;
  return (
    <Box as="dl" textAlign="end">
      <DefinitionItem term="EPISODE RUN TIME">
        {serie.episode_run_time} min
      </DefinitionItem>
      <DefinitionItem term="LANGUE">{langue?.english_name}</DefinitionItem>
      <DefinitionItem term="GENRES">
        {serie?.genres &&
          serie?.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
      </DefinitionItem>
    </Box>
  );
};

export default SerieAttributes;
