import { Box, Heading } from "@chakra-ui/react";

interface Props {
  keyTrailer: string;
}

const VideoTrailer = ({ keyTrailer }: Props) => {
  console.log(
    `https://www.youtube.com/embed/${keyTrailer}?rel=0&showinfo=0&autoplay=0`
  );
  return (
    <>
      {" "}
      <Box padding={10} width="100%" height="90vh" textAlign="start">
        <Heading as={"h3"} fontSize="2xl" marginBottom={6}>
          Trailer
        </Heading>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${keyTrailer}?rel=0&showinfo=0&autoplay=0`}
          allow="autoplay; encrypted-media"
        ></iframe>
      </Box>
    </>
  );
};

export default VideoTrailer;
