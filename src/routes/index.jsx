import {
  createBrowserRouter,
  // isRouteErrorResponse,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { fetchAllCountries, fetchCountryDetails } from "../api";
import ErrorBoundary from "./ErrorBoundry";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchAllCountries,
        errorElement: <ErrorBoundary />,
      },
      {
        path: ":country",
        loader: fetchCountryDetails,
        element: <Details />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
