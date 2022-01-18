import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Search from "../Search/Search";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Success from "../Success/Success";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import newsAPI from "../../utils/newsAPI";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();
  const [onSavedNews, setOnSavedNews] = useState(false);
  const location = useLocation().pathname.substring(1);
  const [newsCardListShown, setNewsCardListShown] = useState(false);
  const [cards, setCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  const [hasResults, setHasResults] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const savedNewsPath = ["saved-news"];
    if (savedNewsPath.includes(location)) {
      setOnSavedNews(true);
    } else {
      setOnSavedNews(false);
    }
  }, [location]);

  function handleSearchSubmit(keyword) {
    setNewsCardListShown(false);
    setIsLoading(true);
    newsAPI
      .searchArticles(keyword)
      .then((res) => {
        console.log(res);
        setNewsCardListShown(true);
        setCards(res);
        if (res.length === 0) {
          setHasResults(false);
        } else {
          setHasResults(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignInClick() {
    setSignInOpen(true);
    setSignUpOpen(false);
    setSuccessOpen(false);
  }

  function handleSignUpClick() {
    setSignUpOpen(true);
    setSignInOpen(false);
  }

  function handleRegister(email, password, username) {
    setSignUpOpen(false);
    setSuccessOpen(true);
  }

  function handleRegisterSubmit(email, password, username) {
    setIsRegistered(true);
    handleRegister();
  }

  function handleLogin(email, password, username) {
    setLoggedIn(true);
    setCurrentUser({ email, password});
    console.log(currentUser);
    setSignInOpen(false);
  }

  function handleLoginSubmit(email, password, username) {
    handleLogin(email, password, username);
    history.push("/");
  }

  function handleLogout() {
    setLoggedIn(false);
    history.push("/");
  }

  function closeAllPopups() {
    setSignInOpen(false);
    setSignUpOpen(false);
    setSuccessOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          onSavedNews={onSavedNews}
          setNewsCardListShown={setNewsCardListShown}
          setSearchKeyword={setSearchKeyword}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          onSignInClick={handleSignInClick}
          onLotout={handleLogout}
          currentUser={currentUser}
        />
        <Switch>
          <Route exact path="/">
            <Search
              setNewsCardListShown={setNewsCardListShown}
              onSearch={handleSearchSubmit}
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
            {hasResults && newsCardListShown && (
              <NewsCardList
                onSavedNews={onSavedNews}
                cards={cards}
                shownCards={shownCards}
                setShownCards={setShownCards}
                onSignInClick={handleSignInClick}
                loggedIn={loggedIn}
              />
            )}
            {isLoading && <Preloader />}
            {!hasResults && newsCardListShown && <NoResults />}
            <About />
          </Route>
          <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
            <SavedNewsHeader
              onSavedNews={onSavedNews}
              setNewsCardListShown={setNewsCardListShown}
              setSearchKeyword={setSearchKeyword}
              currentUser={currentUser}
              loggedIn={loggedIn}
            />
            <NewsCardList
              onSavedNews={onSavedNews}
              shownCards={shownCards}
              setShownCards={setShownCards}
              loggedIn={loggedIn}
              currentUser={currentUser}
            />
          </ProtectedRoute>
        </Switch>
        <SignIn
          isOpen={signInOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInClick}
          onLoginSubmit={handleLoginSubmit}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          onSignUpClick={handleSignUpClick}
        />
        <SignUp
          setCurrentUser={setCurrentUser}
          isOpen={signUpOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInClick}
          onRegisterSubmit={handleRegisterSubmit}
        />
        <Success
          isOpen={successOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInClick}
          isRegistered={isRegistered}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
