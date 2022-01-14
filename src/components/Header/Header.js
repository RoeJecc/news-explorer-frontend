import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

function Header({
  onSavedNews,
  setNewsCardListShown,
  loggedIn,
  onSignInClick,
  setLoggedIn,
  currentUser,
}) {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={
          "header__title " + (onSavedNews ? "header__title_black" : "")
        }
      >
        NewsExplorer
      </NavLink>
      <Navigation
        onSavedNews={onSavedNews}
        setNewsCardListShown={setNewsCardListShown}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        onSignInClick={onSignInClick}
        currentUser={currentUser}
      />
    </header>
  );
}

export default Header;
