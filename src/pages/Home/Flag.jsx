import "./flag.css";
import { Link } from "react-router-dom";
export default function Flag({
  country: { flags, name, population, region, capital },
}) {
  return (
    <Link to={`/${name.common}`} className="card">
      <img src={flags.svg} alt={name.common} />
      <div className="textSection">
        <h3>{name.official} </h3>
        <h4>
          Population: <span>{population.toLocaleString()} </span>
        </h4>
        <h4>
          Region: <span>{region} </span>
        </h4>
        <h4>
          Capital: <span>{capital?.join(", ") ?? "None"} </span>
        </h4>
      </div>
    </Link>
  );
}
