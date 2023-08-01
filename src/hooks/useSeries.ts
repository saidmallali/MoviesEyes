import { TvShow } from "../entities/TvShow";
import APIClient from "../services/api-client";
import useMovieSerieStore from "../store";
import { useInfiniteQuery } from "@tanstack/react-query";
import convertToMilliscond from "../utilities/convertToMilliscond";

const apiClient = new APIClient<TvShow>("/discover/tv/");

const useSeries = (id: number) => {
  const serieQuery = useMovieSerieStore((s) => s.serieQuery);

  return useInfiniteQuery({
    queryKey: ["discover series", serieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: serieQuery.genreId || id,
          page: pageParam,
          sort_by: serieQuery.sortOrder,
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

export default useSeries;
