import { Link } from "react-router-dom";
import "./main.css";
import { useEffect, useState } from "react";
import { fetchCountryByCode } from "../../api";
export default function Main({
  country: {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    borders,
    tld,
    currencies,
    languages,
  },
}) {
  const [borderList, setBorderList] = useState([]);
  useEffect(() => {
    setBorderList([]);
    Promise.all(borders.map((border) => fetchCountryByCode(border))).then(
      (countries) => {
        setBorderList(countries.map(({ name }) => name.common));
      }
    );
  }, [borders]);

  return (
    <main className="details">
      <section className="image">
        <img src={flags.svg} alt={flags.alt} id="flag" />
      </section>
      <section className="details">
        <h2 id="country_name">{name.official} </h2>
        <div className="info">
          <section>
            <h4>
              Native Name: <span id="native_name">{name.common} </span>
            </h4>
            <h4>
              Population:{" "}
              <span id="population">{population.toLocaleString()}</span>
            </h4>
            <h4>
              Region: <span id="region">{region}</span>
            </h4>
            <h4>
              Sub Region: <span id="sub_region">{subregion}</span>
            </h4>
            <h4>
              Capital: <span id="capital">{capital.join(", ")}</span>
            </h4>
          </section>
          <section>
            <h4>
              Top Level Domain: <span id="top_domain">{tld.join(", ")}</span>
            </h4>
            <h4>
              Currency:{" "}
              <span id="currency">
                {Object.values(currencies).map(
                  ({ name, symbol }) => `${name} ${symbol} `
                )}
              </span>
            </h4>
            <h4>
              Languages:{" "}
              <span id="languages">{Object.values(languages).join(", ")}</span>
            </h4>
          </section>
        </div>
        <div id="borders">
          <h4>Border Countries:</h4>
          {borderList.map((border, i) => (
            <Link key={i} to={`/${border}`}>
              {border}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
