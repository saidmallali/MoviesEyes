import axios, { AxiosRequestConfig } from "axios";
import { Trailer } from "../entities/Trailer";

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
  total_pages: number;
}

interface FetchGenres<T> {
  genres: T[];
}

interface FetchTrailers {
  id: number;
  results: Trailer[];
}

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstane
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getGeners = () => {
    return axiosInstane
      .get<FetchGenres<T>>(this.endpoint)
      .then((res) => res.data);
  };

  getDetails = () => {
    return axiosInstane.get<T>(this.endpoint).then((res) => res.data);
  };

  getTrailer = () => {
    return axiosInstane
      .get<FetchTrailers>(this.endpoint)
      .then((res) => res.data);
  };
}

export default APIClient;
