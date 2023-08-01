import {
  Button,
  Spinner,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import { useState } from "react";
import genresMovie from "../data/genresMovie";
import genresSerie from "../data/genresSerie";
import useMovieSerieStore from "../store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  setGenre: (genre: number) => void;
  type: "series" | "movies";
}

const GenresSelector = ({ setGenre, type }: Props) => {
  const location = useLocation();
  const { movieQuery, serieQuery } = useMovieSerieStore();

  const genreId =
    type === "movies"
      ? useMovieSerieStore((s) => s.movieQuery.genreId)
      : useMovieSerieStore((s) => s.serieQuery.genreId);

  const genreName =
    type === "movies"
      ? genresMovie.genres.find((g) => g.id === genreId)?.name
      : genresSerie.genres.find((g) => g.id === genreId)?.name;

  const { data, isLoading, error } = useGenres();
  const [Genre, setGenreState] = useState(genreName);

  if (error) throw error;

  const handeClick = (id: number, name: string) => {
    setGenreState(name);
    setGenre(id);
  };

  useEffect(() => {
    setGenreState(genreName);
  }, [location, movieQuery.genreId, serieQuery.genreId]);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {Genre}
      </MenuButton>
      <MenuList>
        {data &&
          data.genres?.map((g) => (
            <MenuItem onClick={() => handeClick(g.id, g.name)} key={g.id}>
              {g.name}
            </MenuItem>
          ))}
        {isLoading && <Spinner />}
      </MenuList>
    </Menu>
  );
};

export default GenresSelector;
