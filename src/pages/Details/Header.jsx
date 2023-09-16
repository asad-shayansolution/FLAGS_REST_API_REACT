import { Link } from "react-router-dom";
import "./header.css";
import { MdKeyboardBackspace } from "react-icons/md";
export default function Header() {
  return (
    <header>
      <Link id="back-btn" to="/">
        <MdKeyboardBackspace />
        Back
      </Link>
    </header>
  );
}
