import { HStack, Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack
      maxW="100%"
      width="100vw"
      justifyContent="space-between"
      padding={3}
    >
      <Box mr={4} flex="1">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
