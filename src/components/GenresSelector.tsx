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

interface Props {
  setGenre: (genre: number) => void;
  genre?: string;
}

const GenresSelector = ({ setGenre, genre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const [Genre, setGenreState] = useState("Genres" || genre);

  if (error) throw error;

  const handeClick = (id: number, name: string) => {
    setGenreState(name);
    setGenre(id);
  };

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
