import Navigation from "../Navigation/Navigation";


function Header({
  onSavedNews,
  setNewsCardListShown,
  loggedIn,
  onSignInClick,
  setLoggedIn,
  currentUser
}) {
  return (
    <header className="header">
      <h2
        className={
          "header__title " + (onSavedNews ? "header__title_black" : "")
        }
      >
        NewsExplorer
      </h2>
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
