import { create } from "zustand";

interface MovieQuery {
  genreId?: number;
  page?: number;
  searchText?: string;
  sortOrder?: string;
}

interface SerieQuery {
  genreId?: number;
  page?: number;
  searchText?: string;
  sortOrder?: string;
}

interface MovieSerieStore {
  movieQuery: MovieQuery;
  serieQuery: SerieQuery;
  setMovieGenreId: (genreId: number) => void;
  setMovieSortOrder: (sortOrder: string) => void;
  setSeriesGenreId: (genreId: number) => void;
  setSeriesSortOrder: (sortOrder: string) => void;
  setMoviesSearchText: (searchText: string) => void;
  setSeriesSearchText: (searchText: string) => void;
}

const useMovieSerieStore = create<MovieSerieStore>((set) => ({
  movieQuery: {},
  serieQuery: {},
  setMovieGenreId: (genreId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, genreId, searchText: undefined },
    })),

  setMovieSortOrder: (sortOrder) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, sortOrder, searchText: undefined },
    })),

  setSeriesGenreId: (genreId) =>
    set((store) => ({
      serieQuery: { ...store.serieQuery, genreId, searchText: undefined },
    })),

  setSeriesSortOrder: (sortOrder) =>
    set((store) => ({
      serieQuery: { ...store.serieQuery, sortOrder, searchText: undefined },
    })),
  setMoviesSearchText: (searchText) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, searchText },
    })),
  setSeriesSearchText: (searchText) =>
    set((store) => ({
      serieQuery: { ...store.serieQuery, searchText },
    })),
}));

export default useMovieSerieStore;
