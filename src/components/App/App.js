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
import mainAPI from "../../utils/mainAPI";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";

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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [savedArticles, setSavedArticles] = useState([]);
  const [savedCardsArray, setSavedCardsArray] = useState([]);

  useEffect(() => {
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }, [token, history]);

  useEffect(() => {
    mainAPI
      .getCurrentUser(token)
      .then((res) => {
        setCurrentUser(res.user);
      })
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    mainAPI.getArticles(token).then((res) => {
      setSavedArticles(res.articles);
    })
    .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    const savedNewsPath = ["saved-news"];
    if (savedNewsPath.includes(location)) {
      setOnSavedNews(true);
    } else {
      setOnSavedNews(false);
    }
  }, [location]);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

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

  function handleRegister() {
    setHasError(false);
    setSignUpOpen(false);
    setSuccessOpen(true);
  }

  function handleRegisterSubmit(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {
        if (res) {
          setIsRegistered(true);
          handleRegister();
        } else {
          setIsRegistered(false);
          setHasError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }

  function handleLogin() {
    setHasError(false);
    setLoggedIn(true);
    setSignInOpen(false);
  }

  function handleLoginSubmit(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          handleLogin();
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    history.push("/");
  }

  function closeAllPopups() {
    setSignInOpen(false);
    setSignUpOpen(false);
    setSuccessOpen(false);
  }

  function handleCloseAllPopups(e) {
    if (e.target !== e.currentTarget) return;
    closeAllPopups();
  }

  function handleSaveArticle(data) {
    if (!savedArticles.find((obj) => obj.title === data.title)) {
      mainAPI
        .saveArticle(data, searchKeyword, token)
        .then((data) => {
          setSavedArticles((savedArticles) => [
            ...savedArticles,
            data.article,
          ]);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Article already saved.")
    }
  }

  function handleDeleteArticle(data) {
    let articleId;

    if (!onSavedNews) {
      if (savedArticles.find((obj) => obj.link === data.url)) {
        const article = savedArticles.find((obj) => {
          return obj.link === data.url;
        });
        articleId = article._id;
      } else {
        console.log('that card doesnt exist!');
      }
    } else {
      articleId = data._id;
    }

    mainAPI
      .deleteArticle(articleId, token)
      .then((data) => {
        setSavedArticles(
          savedArticles.filter((obj) => obj._id !== data.article._id)
        );
      })
      .catch((err) => console.log(err));
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
          onLogout={handleLogout}
          currentUser={currentUser}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          onClose={handleCloseAllPopups}
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
                onSaveArticleClick={handleSaveArticle}
                onDeleteArticleClick={handleDeleteArticle}
                savedArticles={savedArticles}
                setSavedCardsArray={setSavedCardsArray}
              />
            )}
            {isLoading && <Preloader />}
            {!hasResults && newsCardListShown && <NoResults />}
            <About />
          </Route>
          <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
            <SavedNewsHeader
              currentUser={currentUser}
              savedArticles={savedArticles}
            />
            <NewsCardList
              onSavedNews={onSavedNews}
              shownCards={shownCards}
              setShownCards={setShownCards}
              loggedIn={loggedIn}
              currentUser={currentUser}
              token={token}
              savedCardsArray={savedCardsArray}
              setSavedCardsArray={setSavedCardsArray}
              onDeleteArticleClick={handleDeleteArticle}
              savedArticles={savedArticles}
            />
          </ProtectedRoute>
        </Switch>
        <SignIn
          isOpen={signInOpen}
          onClose={handleCloseAllPopups}
          onSignInClick={handleSignInClick}
          onLoginSubmit={handleLoginSubmit}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          onSignUpClick={handleSignUpClick}
        />
        <SignUp
          setCurrentUser={setCurrentUser}
          isOpen={signUpOpen}
          onClose={handleCloseAllPopups}
          onSignInClick={handleSignInClick}
          onRegisterSubmit={handleRegisterSubmit}
        />
        <Success
          isOpen={successOpen}
          onClose={handleCloseAllPopups}
          onSignInClick={handleSignInClick}
          isRegistered={isRegistered}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
