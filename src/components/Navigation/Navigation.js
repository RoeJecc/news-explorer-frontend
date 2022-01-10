import { NavLink } from "react-router-dom";

function Navigation({ onSavedNews }) {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={
          "navigation__home " + (onSavedNews ? "navigation_type_black" : "")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/saved-news"
        className={
          "navigation__saved-articles " + (onSavedNews ? "navigation__saved-articles_black" : "")
        }
      >
        Saved articles
      </NavLink>
      <button className={
          "navigation__signin " + (onSavedNews ? "navigation__signin_black" : "")
        }>Sign In</button>
    </nav>
  );
}

export default Navigation;
