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

const GenresSelector = () => {
  const { data, isLoading, error } = useGenres();

  if (error) throw error;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Genres
      </MenuButton>
      <MenuList>
        {data &&
          data.genres?.map((g) => <MenuItem key={g.id}>{g.name}</MenuItem>)}
        {isLoading && <Spinner />}
      </MenuList>
    </Menu>
  );
};

export default GenresSelector;
