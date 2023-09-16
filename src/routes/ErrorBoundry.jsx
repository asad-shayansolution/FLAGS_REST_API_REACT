import { useRouteError } from "react-router-dom";
import Error from "../Layout/Error";
import HomeHeader from "../pages/Home/Header";
import DetailsHeader from "../pages/Details/Header";

export default function ErrorBoundary() {
  const error = useRouteError();
  // if (isRouteErrorResponse(error)) return;
  switch (error.data?.page) {
    case "home":
      return (
        <>
          <HomeHeader />
          <Error />
        </>
      );
    case "details":
      return (
        <>
          <DetailsHeader />
          <Error />
        </>
      );
    default:
      return <Error />;
  }
}
