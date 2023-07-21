import { Image } from "@chakra-ui/react";
interface Props {
  image: string;
}
const Poster = ({ image }: Props) => {
  return (
    <>
      <Image rounded="lg" src={image}></Image>
    </>
  );
};

export default Poster;
