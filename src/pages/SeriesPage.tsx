import { SimpleGrid, Button, Spinner, Box, Flex } from "@chakra-ui/react";
import useSeries from "../hooks/useSeries";
import MediaCard from "../components/MediaCard";
import GenresSelector from "../components/GenresSelector";
import useMovieSerieStore from "../store";
import SortSelector from "../components/SortSelector";
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import MediaCardSkelton from "../components/MediaCardSkelton";

const SeriesPage = () => {
  const { id = 10759 } = useParams();
  const Location = useLocation();
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useSeries(Number(id));
  const setSeriesGenreId = useMovieSerieStore((s) => s.setSeriesGenreId);
  const sortOrder = useMovieSerieStore((s) => s.serieQuery.sortOrder);
  const setSeriesSortOrder = useMovieSerieStore((s) => s.setSeriesSortOrder);

  // if (id) setMovieGenreId(Number(id));

  useEffect(() => {
    setSeriesGenreId(Number(id));
  }, [Location]);

  if (error) throw error;

  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <Box>
        <Flex mb={4} ml={1}>
          <GenresSelector type="series" setGenre={setSeriesGenreId} />
          <Box mx={3}>
            <SortSelector
              sortOrder={sortOrder || ""}
              setOrder={setSeriesSortOrder}
            />
          </Box>
        </Flex>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 5,
            xl: 6,
          }}
          rowGap={3}
          columnGap={2}
        >
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((serie) => (
                <MediaCard
                  key={serie.id}
                  title={serie.name}
                  image={`https://image.tmdb.org/t/p/w780/${serie.poster_path}`}
                  rating={serie.vote_average}
                  id={serie.id}
                  releaseDate={serie.first_air_date}
                  type="serie"
                />
              ))}
            </React.Fragment>
          ))}
          {isLoading && Skeletons.map((_, i) => <MediaCardSkelton key={i} />)}
        </SimpleGrid>
        <Flex my={3} justifyContent={"center"}>
          {hasNextPage && (
            <Button onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Loading ..." : "Load More"}
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SeriesPage;
