import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
export default function Details() {
  const country = useLoaderData();
  return (
    <>
      <Header />
      <Main country={country} />
    </>
  );
}
