import { Movie } from "../entities/Movie";
import APIClient from "../services/api-client";
import useMovieSerieStore from "../store";
import { useInfiniteQuery } from "@tanstack/react-query";
import convertToMilliscond from "../utilities/convertToMilliscond";

const apiClient = new APIClient<Movie>("/discover/movie/");

const useMovies = (id: number) => {
  const movieQuery = useMovieSerieStore((s) => s.movieQuery);

  return useInfiniteQuery({
    queryKey: ["discover", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genreId || id,
          page: pageParam,
          sort_by: movieQuery.sortOrder,
        },
      }),
    staleTime: convertToMilliscond("24h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages !== allPages.length + 1
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
