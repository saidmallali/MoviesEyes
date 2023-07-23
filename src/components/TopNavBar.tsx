import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDownCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import genresMovie from "../data/genresMovie";
import genresSerie from "../data/genresSerie";
import { Genre } from "../entities/genre";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

export default function TopNavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={AiOutlineClose} w={3} h={3} />
              ) : (
                <Icon as={GiHamburgerMenu} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to={"/"}>
            <Image maxW="140px" src={logo} alt={"Movies Logo"} />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button fontSize={"sm"} fontWeight={400}>
            <Link to={"/"}>Sign In</Link>
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"orange.400"}
            _hover={{
              bg: "orange.300",
            }}
          >
            <Link to="/">Sign Up</Link>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.name}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "orange" : "inherit",
                    };
                  }}
                  to={navItem.href ?? "#"}
                >
                  {navItem.name}{" "}
                </NavLink>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"md"}
              >
                <SimpleGrid columns={3}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      type={navItem.name}
                      key={child.id}
                      id={child.id}
                      name={child.name}
                    />
                  ))}
                </SimpleGrid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

interface Props {
  type: string;
  name: string;
  id: number;
}

const DesktopSubNav = ({ name, id, type }: Props) => {
  return (
    <Box role={"group"} display={"block"} p={2} rounded={"md"}>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "orange" : "inherit",
          };
        }}
        to="#"
      >
        <Box
          transition={"all .3s ease"}
          _groupHover={{ color: "orange.400" }}
          fontWeight={500}
          textAlign="start"
        >
          <Link to={`/${type.toLowerCase()}/${id}/${name.toLowerCase()}`}>
            {name}
          </Link>
        </Box>
      </NavLink>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          navItemName={navItem.name}
          href={navItem.href}
          key={navItem.name}
          children={navItem.children}
        />
      ))}
    </Stack>
  );
};

interface MobileNavItemProps {
  children?: Genre[];
  navItemName: string;
  href?: string;
}
const MobileNavItem = ({ navItemName, children, href }: MobileNavItemProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <NavLink to={href ?? "#"}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {navItemName}
          </Text>
        </NavLink>
        {children && (
          <Icon
            as={BiChevronDownCircle}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={4}
            h={4}
            mt="5px"
            ml={1}
          />
        )}
        <Spacer />
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0 !important" }}
      >
        <SimpleGrid columns={2}>
          {children &&
            children.map((child) => (
              <Box textAlign="start" py={2} key={child.name}>
                <NavLink
                  to={`/${navItemName.toLowerCase()}/${
                    child.id
                  }/${child.name.toLowerCase()}`}
                >
                  {child.name}
                </NavLink>
              </Box>
            ))}
        </SimpleGrid>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  name: string;
  children?: Genre[];
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Movies",
    href: "/movies",
    children: genresMovie.genres,
  },
  {
    name: "Series",
    href: "/series",
    children: genresSerie.genres,
  },
];
