import { Heading } from "@chakra-ui/react";
interface Props {
  title: string;
  tagline: string;
}

const HeadingMovie = ({ title, tagline }: Props) => {
  return (
    <Heading size={"xl"} as={"h1"}>
      {title}: {tagline}
    </Heading>
  );
};

export default HeadingMovie;
