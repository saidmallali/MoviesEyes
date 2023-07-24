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
}

const useMovieSerieStore = create<MovieSerieStore>((set) => ({
  movieQuery: {},
  serieQuery: {},
  setMovieGenreId: (genreId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, genreId },
    })),

  setMovieSortOrder: (sortOrder) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, sortOrder },
    })),

  setSeriesGenreId: (genreId) =>
    set((store) => ({
      serieQuery: { ...store.serieQuery, genreId },
    })),

  setSeriesSortOrder: (sortOrder) =>
    set((store) => ({
      serieQuery: { ...store.serieQuery, sortOrder },
    })),
}));

export default useMovieSerieStore;
