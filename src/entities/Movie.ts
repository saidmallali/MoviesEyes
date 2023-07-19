import { Companie } from "./Companie";
import { Genre } from "./genre";
import { ProductionCountries } from "./ProductionCountries";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  budget: number;
  genres: Genre[];
  homepage: string;
  imbd_id: string;
  production_companies: Companie[];
  production_countrie: ProductionCountries[];
  status: string;
  tagline: string;
  vote_count: number;
  runtime: number;
}
