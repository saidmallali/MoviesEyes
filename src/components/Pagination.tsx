import { Button, Flex } from "@chakra-ui/react";
const Pagination = () => {
  return (
    <>
      <Flex my={3} justifyContent={"center"}>
        <Button mx={2}>Prev Page</Button>
        <Button mx={2}>Next Page</Button>
      </Flex>
    </>
  );
};

export default Pagination;
