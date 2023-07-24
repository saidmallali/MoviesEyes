import { Companie } from "./Companie";
import { Genre } from "./genre";

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface TvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  episode_run_time?: number[];
  genres?: Genre[];
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  production_companies?: Companie[];
  seasons?: Season[];
  status?: string;
  tagline?: string;
  next_episode_to_air?: string;
}
