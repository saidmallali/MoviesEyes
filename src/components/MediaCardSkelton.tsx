import { Skeleton } from "@chakra-ui/react";

const MediaCardSkelton = () => {
  return (
    <Skeleton
      maxW={{
        lg: "200px",
        sm: "300px",
      }}
      borderWidth="2px"
      rounded="lg"
      shadow="md"
      minH="270px"
      mx="5px"
    ></Skeleton>
  );
};

export default MediaCardSkelton;
