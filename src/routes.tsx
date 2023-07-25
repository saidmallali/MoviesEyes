import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import DetailPage from "./pages/DetailPage";
import SerieDetailPage from "./pages/SerieDetailPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movies/:id/:genre",
        element: <MoviesPage />,
      },
      {
        path: "series",
        element: <SeriesPage />,
      },
      {
        path: "series/:id/:genre",
        element: <SeriesPage />,
      },
      {
        path: "movie/:id/:name",
        element: <DetailPage />,
      },
      {
        path: "serie/:id/:name",
        element: <SerieDetailPage />,
      },
      {
        path: "search/:type/:searchText",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
