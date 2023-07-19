import { Grid, Flex, GridItem, Box } from "@chakra-ui/react";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";
import AiringTodayTvSeries from "../components/AiringTodayTVSeries";
import OnTheAirTvSeries from "../components/OnTheAirTvSeries";
import PopularTvSeries from "../components/PopularTvSeries";
import GenresSelector from "../components/GenresSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      {/* <Show above="lg">
        <GridItem>
          <Aside />
        </GridItem>
      </Show> */}
      <GridItem area="main">
        <Box maxW="100vw">
          <Flex ml="41px">
            <GenresSelector />
          </Flex>
          <NowPlayingMovies />
          <PopularMovies />
          <TopRatedMovies />
          <UpcomingMovies />
          <AiringTodayTvSeries />
          <OnTheAirTvSeries />
          <PopularTvSeries />
          <TopRatedMovies />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
