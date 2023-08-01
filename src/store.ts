import { create } from "zustand";

interface AppQuery {
  showNavBar: boolean;
}

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
  appQuery: AppQuery;
  movieQuery: MovieQuery;
  serieQuery: SerieQuery;
  setMovieGenreId: (genreId: number) => void;
  setMovieSortOrder: (sortOrder: string) => void;
  setSeriesGenreId: (genreId: number) => void;
  setSeriesSortOrder: (sortOrder: string) => void;
  setMoviesSearchText: (searchText: string) => void;
  setSeriesSearchText: (searchText: string) => void;
  setShowNavBar: (showNavBar: boolean) => void;
}

const useMovieSerieStore = create<MovieSerieStore>((set) => ({
  appQuery: {
    showNavBar: true,
  },
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

  setShowNavBar: (showNavBar) =>
    set((store) => ({
      appQuery: { ...store.appQuery, showNavBar },
    })),
}));

export default useMovieSerieStore;
