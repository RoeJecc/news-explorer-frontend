import { NavLink, useHistory } from "react-router-dom";

function Navigation({ onSavedNews, loggedIn, onSignInClick, setLoggedIn }) {
  const history = useHistory();

  function handleLoginButton() {
    onSignInClick();
  }

  function onLogout() {
    setLoggedIn(false);
    history.push("/");
  }

  function logOut() {
    onLogout();
  }
  return !loggedIn ? (
    <nav className="navigation">
      <NavLink
        to="/"
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
    </nav>
  ) : (
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
        Log Out
      </button>
    </nav>
  );
}

export default Navigation;
