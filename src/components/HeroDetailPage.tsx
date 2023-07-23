import { Movie } from "../entities/Movie";
import { Grid, GridItem, Show, Flex, Box, Badge, Text } from "@chakra-ui/react";
import MovieAttributes from "./MovieAttributes";
import HeadingMovie from "./HeadingMovie";
import Rating from "./Rating";
import ExpandableText from "./ExpandableText";
import Poster from "./Poster";

interface Props {
  data: Movie;
}

const HeroDetailPage = ({ data }: Props) => {
  return (
    <>
      {" "}
      <Grid
        templateAreas={{
          sm: `"main"
                " main "
                "atrr"`,
          md: `"atrr main poster"
                " atrr main poster"
                "atrr main poster"`,
          lg: `"atrr main poster"
                " atrr main poster"
                "atrr main poster"`,
        }}
        templateColumns={{ sm: "1fr", md: "200px 1fr", lg: "200px 4fr 2fr" }}
        minH={"70vh"}
      >
        <GridItem paddingY={2} px={3} area="atrr">
          <MovieAttributes movie={data} />
        </GridItem>
        <GridItem px={3} textAlign={"start"} area="main">
          <HeadingMovie title={data.title} tagline={data.tagline} />
          <Flex my={5}>
            <Rating numReviews={data.vote_count} score={data.vote_average} />
          </Flex>
          <ExpandableText limit={250}>{data.overview}</ExpandableText>
          <Box marginY={3}>
            <Text color="gray.600" fontSize="md" fontWeight={"semibold"} mb={2}>
              Production Companies:{" "}
            </Text>
            {data.production_companies.map((pc) => (
              <Badge rounded={"md"} mx={2} my={1} padding={2}>
                {pc.name}
              </Badge>
            ))}
          </Box>
          <Box marginY={3}>
            <Text color="gray.600" fontSize="md" fontWeight={"semibold"} mb={2}>
              Production Countries:{" "}
            </Text>
            {data.production_countries.map((pc) => (
              <Badge rounded={"md"} mx={2} my={1} padding={2}>
                {pc.name}
              </Badge>
            ))}
          </Box>
        </GridItem>
        <GridItem paddingY={2} area="poster">
          <Show above="lg">
            <Poster
              image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            />
          </Show>
        </GridItem>
      </Grid>
    </>
  );
};

export default HeroDetailPage;
