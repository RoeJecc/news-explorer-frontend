import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import logout from "../../images/logout.png";
import logoutwhite from "../../images/logoutwhite.png";
import NavContainer from "../NavContainer/NavContainer";
import navlogowhite from "../../images/navlogowhite.png";
import navlogoblack from "../../images/navlogoblack.png";
import navcloseicon from "../../images/closebutton.png";

function Navigation({
  onSavedNews,
  loggedIn,
  onSignInClick,
  setLoggedIn,
  currentUser,
  isNavOpen,
  setIsNavOpen,
}) {
  const [mobileWidth, setMobileWidth] = useState(false);
  const [navLogo, setNavLogo] = useState();
  const [logoutIcon, setLogoutIcon] = useState();
  const history = useHistory();

  function checkWidth() {
    const windowWidth = window.matchMedia("(max-width: 540px)");
    if (windowWidth.matches) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  });

  useEffect(() => {
    if (!isNavOpen && onSavedNews) {
      setNavLogo(navlogoblack);
    } else if (!isNavOpen && !onSavedNews) {
      setNavLogo(navlogowhite);
    } else if (isNavOpen) {
      setNavLogo(navcloseicon);
    }
  }, [isNavOpen, onSavedNews]);

  useEffect(() => {
    if (mobileWidth) {
      setLogoutIcon(logoutwhite);
    } else if (onSavedNews) {
      setLogoutIcon(logout);
    } else if (!onSavedNews) {
      setLogoutIcon(logoutwhite);
    }
  }, [mobileWidth, onSavedNews]);

  function handleLoginButton() {
    onSignInClick();
    handleNavClick();
  }

  function onLogout() {
    setLoggedIn(false);
    history.push("/");
  }

  function logOut() {
    handleNavClick();
    onLogout();
  }

  function onNavLogoClick() {
    setIsNavOpen(!isNavOpen);
  }

  function handleNavClick() {
    setIsNavOpen(false);
  }

  return !loggedIn ? (
    <>
      <img
        className="navigation__logo"
        alt="nav icon"
        src={navLogo}
        onClick={onNavLogoClick}
      />
      <nav
        className={`navigation ${
          mobileWidth && isNavOpen
            ? "navigation__mobile_loggedin"
            : "navigation__mobile_inactive"
        }`}
      >
        <NavContainer mobileWidth={mobileWidth}>
          <NavLink
            to="/"
            onClick={handleNavClick}
            className={
              "navigation__home " + (onSavedNews ? "navigation_type_black" : "")
            }
          >
            Home
          </NavLink>
          <button
            onClick={handleLoginButton}
            className={
              "navigation__signin " +
              (onSavedNews ? "navigation__signin_black" : "")
            }
          >
            Sign In
          </button>
        </NavContainer>
      </nav>
    </>
  ) : (
    <>
      <img
        className="navigation__logo"
        alt="nav icon"
        src={navLogo}
        onClick={onNavLogoClick}
      />
      <nav
        className={`navigation ${
          mobileWidth && isNavOpen
            ? "navigation__mobile_loggedin"
            : "navigation__mobile_inactive"
        }`}
      >
        <NavContainer mobileWidth={mobileWidth}>
          <NavLink
            to="/"
            onClick={handleNavClick}
            className={
              "navigation__home " + (onSavedNews ? "navigation_type_black" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/saved-news"
            className={
              "navigation__saved-articles " +
              (onSavedNews ? "navigation__saved-articles_black" : "")
            }
          >
            Saved articles
          </NavLink>
          <button
            onClick={logOut}
            className={
              "navigation__signin " +
              (onSavedNews ? "navigation__signin_black" : "")
            }
          >
            {currentUser.email}
            <img
              className="navigation__logout_button"
              src={logoutIcon}
            />
          </button>
        </NavContainer>
      </nav>
    </>
  );
}

export default Navigation;
