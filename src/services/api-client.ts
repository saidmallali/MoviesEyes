import axios from "axios";

const axiosInstane = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDFmZmJlZjFlYTIxM2M5ODQ1MGI4Y2JlMTAxMmI2MyIsInN1YiI6IjYwZDQ5MzBkM2M4ODdkMDAyZDMzMWRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qc911ar3EP0EGSwLn0oHg_ZtWx01_PF8MEbW0eLtJN0",
  },
});

interface FetchResponse<T> {
  page: number;
  results: T[];
}

interface FetchGenres<T> {
  genres: T[];
}

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstane
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };

  getGeners = () => {
    return axiosInstane
      .get<FetchGenres<T>>(this.endpoint)
      .then((res) => res.data);
  };

  getMovieDetails = () => {
    return axiosInstane.get<T>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
