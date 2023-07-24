import { HStack, Spacer } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      maxW="100%"
      width="100vw"
      justifyContent="space-between"
      padding={3}
    >
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
