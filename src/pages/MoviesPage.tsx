import { SimpleGrid, Button, Box, Flex } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MediaCard from "../components/MediaCard";
import GenresSelector from "../components/GenresSelector";
import useMovieSerieStore from "../store";
import SortSelector from "../components/SortSelector";
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import MediaCardSkelton from "../components/MediaCardSkelton";
const MoviesPage = () => {
  const { id = 28 } = useParams();
  const Location = useLocation();
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies(Number(id));
  const setMovieGenreId = useMovieSerieStore((s) => s.setMovieGenreId);
  const sortOrder = useMovieSerieStore((s) => s.movieQuery.sortOrder);
  const setMovieSortOrder = useMovieSerieStore((s) => s.setMovieSortOrder);

  // if (id) setMovieGenreId(Number(id));

  useEffect(() => {
    setMovieGenreId(Number(id));
  }, [Location]);

  if (error) throw error;
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <Box>
        <Flex mb={4} ml={1}>
          <GenresSelector type="movies" setGenre={setMovieGenreId} />
          <Box mx={3}>
            <SortSelector
              sortOrder={sortOrder || ""}
              setOrder={setMovieSortOrder}
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
              {page.results.map((movie) => (
                <MediaCard
                  key={movie.id}
                  title={movie.title}
                  image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  rating={movie.vote_average}
                  id={movie.id}
                  releaseDate={movie.release_date}
                  type="movie"
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

export default MoviesPage;
