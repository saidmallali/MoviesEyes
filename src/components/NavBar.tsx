import { HStack, Text, Flex } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <HStack
      maxW="100%"
      width="100vw"
      justifyContent="space-between"
      padding={3}
    >
      <Flex alignItems="center">
        <Text fontSize="2em" color="orange" marginRight={2}>
          Movies
        </Text>
        <Text fontSize="1.5em" color="yellow.300">
          Eyes
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <NavBarItem path="/">Home</NavBarItem>
        <NavBarItem path="/movies">Movies</NavBarItem>
        <NavBarItem path="/series">Series</NavBarItem>
      </Flex>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
