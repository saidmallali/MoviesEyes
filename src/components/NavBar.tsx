import { HStack, Box, Spacer } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useMovieSerieStore from "../store";

const NavBar = () => {
  const showNavBar = useMovieSerieStore((s) => s.appQuery.showNavBar);
  return (
    <HStack
      maxW="100%"
      width="100vw"
      justifyContent="space-between"
      padding={3}
    >
      {showNavBar && (
        <Box mr={4} flex="1">
          <SearchInput />
        </Box>
      )}
      {!showNavBar && <Spacer />}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
