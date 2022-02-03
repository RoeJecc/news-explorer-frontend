import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header({
  onSavedNews,
  setNewsCardListShown,
  loggedIn,
  onSignInClick,
  setLoggedIn,
  currentUser,
  isNavOpen,
  setIsNavOpen,
  onLogout
}) {
  const [navLogo, setNavLogo] = useState();

  function onNavLogoClick() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <header className="header">
      <div
        className={`header__container ${
          isNavOpen ? "header__mobile-open" : "header__mobile-closed"
        }`}
      >
        <NavLink
          exact
          to="/"
          className={`header__title ${onSavedNews && "header__title_black"} ${
            isNavOpen && "header__title_mobile-open"
          }`}
        >
          NewsExplorer
        </NavLink>
        <img
          className="header__logo"
          alt="header icon"
          src={navLogo}
          onClick={onNavLogoClick}
        />
        <Navigation
          onSavedNews={onSavedNews}
          setNewsCardListShown={setNewsCardListShown}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          onSignInClick={onSignInClick}
          currentUser={currentUser}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          navLogo={navLogo}
          setNavLogo={setNavLogo}
          onLogout={onLogout}
        />
      </div>
    </header>
  );
}

export default Header;
