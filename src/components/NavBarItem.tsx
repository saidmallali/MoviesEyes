import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  path: string;
  children: ReactNode;
}
const NavBarItem = ({ path, children }: Props) => {
  return (
    <Box
      _hover={{
        color: "#888",
        transform: "scale(1.2)",
        transition: "all 0.5s",
      }}
      paddingX={2}
    >
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "seagreen" : "inherit",
          };
        }}
        to={path}
      >
        {children}{" "}
      </NavLink>
    </Box>
  );
};

export default NavBarItem;
