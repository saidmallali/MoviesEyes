import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import TopNavBar from "../components/TopNavBar";

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
