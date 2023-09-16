import { useRef } from "react";
import "./header.css";
import { MdSearch } from "react-icons/md";
export default function Header({ filterCountries }) {
  const searchRef = useRef();
  const filterRef = useRef();
  return (
    <header>
      <section className="search">
        <MdSearch size="24" />
        <input
          name="name"
          ref={searchRef}
          type="text"
          placeholder="Search for a country..."
          autoComplete="off"
          onChange={(e) => {
            filterCountries(e.target.name, e.target.value);
            filterRef.current.value = "";
          }}
        />
      </section>
      <section className="filter">
        <select
          name="region"
          ref={filterRef}
          onChange={(e) => {
            filterCountries(e.target.name, e.target.value);
            searchRef.current.value = "";
          }}
        >
          <option defaultValue="" disabled hidden>
            Filter by Region
          </option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
    </header>
  );
}
