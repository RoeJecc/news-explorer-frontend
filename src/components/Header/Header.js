import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

function Header({
  onSavedNews,
  setNewsCardListShown,
  loggedIn,
  onSignInClick,
  setLoggedIn,
  currentUser,
  isNavOpen,
  setIsNavOpen,
}) {
  return (
    <header
      className={`header ${
        isNavOpen ? "header__mobile-open" : "header__mobile-closed"
      }`}
    >
      <NavLink
        to="/"
        className={`header__title ${onSavedNews && "header__title_black"} ${
          isNavOpen && "header__title_mobile-open"
        }`}
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
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </header>
  );
}

export default Header;
