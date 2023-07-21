import { Box, Icon } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Props {
  score: number;
  numReviews: number;
}

const Rating = ({ score, numReviews }: Props) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(score * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <Icon
                as={BsStarFill}
                key={i}
                style={{ marginLeft: "1" }}
                color={"gold"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <Icon color={"gold"} as={BsStarHalf} key={i} ml={1} />;
          }
          return <Icon color={"gold"} as={BsStar} key={i} ml={1} />;
        })}
      <Box as="span" ml="2" color="gray.400" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
};

export default Rating;
