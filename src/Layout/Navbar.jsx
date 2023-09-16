import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./navbar.css";
import { THEME_KEY } from "../configs";
import { useState } from "react";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(
    document.body.classList.contains("dark")
  );
  function toggleTheme() {
    setDarkTheme((prev) => !prev);
    localStorage.setItem(THEME_KEY, document.body.classList.toggle("dark"));
  }
  return (
    <div className="nav-container">
      <nav>
        <h2>
          <Link to="/">Where in the world? </Link>
        </h2>
        <button id="toggleTheme" onClick={toggleTheme}>
          {darkTheme ? (
            <>
              <MdLightMode />
              Light Mode
            </>
          ) : (
            <>
              <MdDarkMode />
              Dark Mode
            </>
          )}
        </button>
      </nav>
    </div>
  );
}
