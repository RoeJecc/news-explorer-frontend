import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ onSavedNews }) {
  return (
    <header className="header">
      <h2
        className={
          "header__title " +
          (onSavedNews ? "header__title_black" : "")
        }
      >
        NewsExplorer
      </h2>
      <Navigation onSavedNews={onSavedNews} />
    </header>
  );
}

export default Header;
