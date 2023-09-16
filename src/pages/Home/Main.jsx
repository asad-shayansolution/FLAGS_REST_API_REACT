import "./main.css";
import Flag from "./Flag";
export default function Main({ countries }) {
  return (
    <main className="home">
      <div className="container">
        {countries.map((country, i) => {
          return <Flag key={i} country={country} />;
        })}
      </div>
    </main>
  );
}
