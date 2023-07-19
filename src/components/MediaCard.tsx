import {
  Image,
  Box,
  Text,
  useDisclosure,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { AiOutlinePlayCircle, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
interface Props {
  image: string;
  title: string;
  rating: number;
  id: number;
  type: string;
}

const MediaCard = ({ image, title, id, rating, type }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Card padding={2}>
    //   <Image src={image} alt={title} borderRadius="3px" />
    //   <Heading size="md">{title}</Heading>
    // </Card>
    <Box
      maxW={{
        lg: "200px",
        sm: "300px",
      }}
      borderWidth="2px"
      borderColor={"gray.700"}
      rounded="lg"
      shadow="md"
      position="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      minH="270px"
      mx="5px"
    >
      <Box
        rounded="lg"
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        right="0"
        background="blackAlpha.600"
        justifyContent={"center"}
        alignItems={"center"}
        style={isOpen ? { display: "flex" } : { display: "none" }}
        transition="all 0.4s "
      >
        <HStack position="absolute" top={3} left={3}>
          <Icon color="gold" as={AiFillStar} />
          <Box>{rating} /10</Box>
        </HStack>
        <Link to={`/${type}/${id}/${title}`}>
          <Icon
            cursor="pointer"
            w={14}
            h={14}
            as={AiOutlinePlayCircle}
            color="green.400"
          />
        </Link>
      </Box>
      <Image
        h="200px"
        objectFit="cover"
        src={image}
        alt={`picture of ${title}`}
        roundedTop="lg"
      />
      <Box pt="2" px="2">
        <Text textAlign="start" fontSize="14px" fontWeight="normal" as={"h6"}>
          {title}{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default MediaCard;
