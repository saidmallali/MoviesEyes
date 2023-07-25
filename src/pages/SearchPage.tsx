import React from "react";
import { SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { useParams, useLocation } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import MediaCard from "../components/MediaCard";
import { Movie } from "../entities/Movie";
import { TvShow } from "../entities/TvShow";

function SearchPage() {
  const { type = "movie", searchText = "" } = useParams();

  if (type === "movie") return <SearchMovie searchText={searchText} />;
  if (type === "tv") return <SearchSeries searchText={searchText} />;
}

interface PropsSerie {
  searchText: string;
}
const SearchSeries = ({ searchText }: PropsSerie) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useSearch<TvShow>("tv", searchText);
  return (
    <>
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
                type="serie"
              />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Flex my={3} justifyContent={"center"}>
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading ..." : "Load More"}
          </Button>
        )}
      </Flex>
    </>
  );
};
interface PropsMovie {
  searchText: string;
}
const SearchMovie = ({ searchText }: PropsMovie) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useSearch<Movie>("movie", searchText);
  return (
    <>
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
      </SimpleGrid>
      <Flex my={3} justifyContent={"center"}>
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading ..." : "Load More"}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default SearchPage;
