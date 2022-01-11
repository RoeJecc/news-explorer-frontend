import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Search from "../Search/Search";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import newsAPI from "../../utils/newsAPI";

function App() {
  const [onSavedNews, setOnSavedNews] = useState(false);
  const location = useLocation().pathname.substring(1);
  const [newsCardListShown, setNewsCardListShown] = useState(false);
  const [cards, setCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  const [hasResults, setHasResults] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="App">
      <Header
        onSavedNews={onSavedNews}
        setNewsCardListShown={setNewsCardListShown}
        setSearchKeyword={setSearchKeyword}
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
            />
          )}
          {isLoading && <Preloader />}
          {!hasResults && newsCardListShown && <NoResults />}
          <About />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader
            onSavedNews={onSavedNews}
            setNewsCardListShown={setNewsCardListShown}
            setSearchKeyword={setSearchKeyword}
          />
          <NewsCardList
            onSavedNews={onSavedNews}
            shownCards={shownCards}
            setShownCards={setShownCards}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
