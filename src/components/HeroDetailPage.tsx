import { Movie } from "../entities/Movie";
import {
  Grid,
  GridItem,
  Show,
  Flex,
  Box,
  Badge,
  Text,
  HStack,
} from "@chakra-ui/react";
import MovieAttributes from "./MovieAttributes";
import HeadingMovie from "./HeadingMovie";
import Rating from "./Rating";
import ExpandableText from "./ExpandableText";
import Poster from "./Poster";
import { TvShow } from "../entities/TvShow";
import SerieAttributes from "./SerieAttributes";

interface Props {
  movie?: Movie;
  serie?: TvShow;
}

const HeroDetailPage = ({ movie, serie }: Props) => {
  const title = serie?.name || movie?.title || "";
  const tagline = serie?.tagline || movie?.tagline || "";
  const numReviews = serie?.vote_count || movie?.vote_count || 0;
  const score = serie?.vote_average || serie?.vote_average || 0;
  const overview = movie?.overview || serie?.overview || " ";
  const posterPath = movie?.poster_path || serie?.poster_path || "";

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
          {movie && <MovieAttributes movie={movie} />}
          {serie && <SerieAttributes serie={serie} />}
        </GridItem>
        <GridItem px={3} textAlign={"start"} area="main">
          <HeadingMovie title={title} tagline={tagline} />
          <Flex my={5}>
            <Rating numReviews={numReviews} score={score} />
          </Flex>
          <ExpandableText limit={250}>{overview}</ExpandableText>
          <Box marginY={3}>
            <Text color="gray.600" fontSize="md" fontWeight={"semibold"} mb={2}>
              Production Companies:{" "}
            </Text>
            {movie?.production_companies.map((pc) => (
              <Badge key={pc.id} rounded={"md"} mx={2} my={1} padding={2}>
                {pc.name}
              </Badge>
            ))}
            {serie?.production_companies &&
              serie?.production_companies.map((pc) => (
                <Badge key={pc.id} rounded={"md"} mx={2} my={1} padding={2}>
                  {pc.name}
                </Badge>
              ))}
          </Box>
          {movie && (
            <Box marginY={3}>
              <Text
                color="gray.600"
                fontSize="md"
                fontWeight={"semibold"}
                mb={2}
              >
                Production Countries:{" "}
              </Text>
              {movie?.production_countries.map((pc) => (
                <Badge key={pc.name} rounded={"md"} mx={2} my={1} padding={2}>
                  {pc.name}
                </Badge>
              ))}
            </Box>
          )}
          {serie && (
            <Box my={3}>
              <Text
                color="gray.600"
                fontSize="md"
                fontWeight={"semibold"}
                mb={2}
              >
                Seasons:
              </Text>
              <HStack>
                {serie?.seasons &&
                  serie.seasons?.map((sc, i) => (
                    <Box
                      backgroundImage={`url(https://image.tmdb.org/t/p/w500/${sc.poster_path})`}
                      width="80px"
                      height="120px"
                      borderRadius="7px"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      opacity="0.7"
                      key={sc.id}
                      position={"relative"}
                    >
                      <Text
                        fontWeight={"bold"}
                        color={"orange"}
                        fontSize={"md"}
                        position={"absolute"}
                        bottom={-5}
                        left={2}
                      >
                        {sc.name}{" "}
                      </Text>
                    </Box>
                  ))}
              </HStack>
            </Box>
          )}
        </GridItem>
        <GridItem paddingY={2} area="poster">
          <Show above="lg">
            <Poster image={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
          </Show>
        </GridItem>
      </Grid>
    </>
  );
};

export default HeroDetailPage;
