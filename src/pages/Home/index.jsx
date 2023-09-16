import { useState, useTransition } from "react";
import Header from "./Header";
import Main from "./Main";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const countries = useLoaderData();
  const [filteredCountries, setCountries] = useState(countries);
  const [, startTransition] = useTransition();
  function filterCountries(k, v) {
    startTransition(() => {
      if (!(k && v)) setCountries(countries);
      else {
        setCountries(
          countries.filter((country) =>
            k === "name"
              ? country.name.official.toLowerCase().includes(v.toLowerCase())
              : country[k].toLowerCase().includes(v.toLowerCase())
          )
        );
      }
    });
  }
  return (
    <>
      <Header filterCountries={filterCountries} />
      <Main countries={filteredCountries} />
    </>
  );
}
