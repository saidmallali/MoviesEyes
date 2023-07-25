import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useMovieSerieStore from "../store";
import { useRef, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setMoviesSearchText = useMovieSerieStore((s) => s.setMoviesSearchText);
  const setSeriesSearchText = useMovieSerieStore((s) => s.setSeriesSearchText);

  const ref = useRef<HTMLInputElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  let type = "movie";
  if (
    location.pathname.includes("movie") ||
    location.pathname.includes("movies")
  )
    type = "movie";
  if (
    location.pathname.includes("serie") ||
    location.pathname.includes("series")
  )
    type = "tv";

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      if (type === "movie") {
        setMoviesSearchText(ref.current.value);
        navigate(`/search/${type}/${ref.current.value}`);
      }
      if (type === "tv") {
        setSeriesSearchText(ref.current.value);
        navigate(`/search/${type}/${ref.current.value}`);
      }
      ref.current.value = "";
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={9}
          placeholder={type === "movie" ? "Search movie..." : "Search Serie..."}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
