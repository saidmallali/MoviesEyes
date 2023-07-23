import { Movie } from "../entities/Movie";
import APIClient from "../services/api-client";
import useMovieSerieStore from "../store";
import { useInfiniteQuery } from "@tanstack/react-query";
import convertToMilliscond from "../utilities/convertToMilliscond";

const apiClient = new APIClient<Movie>("/discover/movie/");

const useMovies = () => {
  const movieQuery = useMovieSerieStore((s) => s.movieQuery);

  return useInfiniteQuery({
    queryKey: ["discover", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genreId,
          page: pageParam,
          sort_by: movieQuery.sortOrder,
        },
      }),
    staleTime: convertToMilliscond("24h"),
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage.total_pages, allPages.length);
      return lastPage.total_pages !== allPages.length + 1
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
