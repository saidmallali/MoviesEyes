import { Movie } from "../entities/Movie";
import { TvShow } from "../entities/TvShow";
import { Heading, Box } from "@chakra-ui/react";
import Slider from "react-slick";

import MediaCard from "./MediaCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaCardSkelton from "./MediaCardSkelton";

interface Props {
  heading: string;
  movies?: Movie[] | undefined;
  series?: TvShow[] | undefined;
  isLoading?: Boolean;
}

const MediaList = ({ heading, movies, series, isLoading }: Props) => {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1219,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 965,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 754,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Box width={"100%"}>
        <Heading
          paddingLeft="10"
          paddingBottom={2}
          marginY={4}
          textAlign="start"
          as="h4"
          size="md"
        >
          {heading}
        </Heading>

        {/* <SimpleGrid columns={4}> */}
        <Box maxW="90%" pt={4} px={9}>
          <Slider {...settings}>
            {movies &&
              movies?.map((movie) => (
                <MediaCard
                  key={movie.id}
                  title={movie.title}
                  image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  rating={movie.vote_average}
                  id={movie.id}
                  type="movie"
                />
              ))}
            {series &&
              series?.map((serie) => (
                <MediaCard
                  key={serie.id}
                  title={serie.name}
                  image={`https://image.tmdb.org/t/p/w780/${serie.poster_path}`}
                  rating={serie.vote_average}
                  id={serie.id}
                  type="serie"
                />
              ))}
            {isLoading && Skeletons.map((_, i) => <MediaCardSkelton key={i} />)}
          </Slider>
        </Box>
        {/* </SimpleGrid> */}
      </Box>
    </>
  );
};

export default MediaList;
