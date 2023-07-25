import { useParams } from "react-router-dom";
import useSerieDetails from "../hooks/useSerieDetails";
import { Spinner, Box } from "@chakra-ui/react";
import HeroDetailPage from "../components/HeroDetailPage";

const SerieDetailPage = () => {
  const { id, name } = useParams();
  let serieId;
  if (id) serieId = parseInt(id);
  const { data, isLoading, error } = useSerieDetails(serieId, name);

  if (isLoading) return <Spinner />;
  if (!data) return null;
  if (error) throw error;

  return (
    <>
      <Box>
        <HeroDetailPage serie={data} />
      </Box>
    </>
  );
};

export default SerieDetailPage;
