import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Search from "../Search/Search";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [onSavedNews, setOnSavedNews] = useState(false);
  const location = useLocation().pathname.substring(1);

  useEffect(() => {
    const savedNewsPath = ["saved-news"];
    if (savedNewsPath.includes(location)) {
      setOnSavedNews(true);
    } else {
      setOnSavedNews(false);
    }
  }, [location]);

  return (
    <div className="App">
      <Header onSavedNews={onSavedNews} />
      <Switch>
        <Route exact path="/">
          <Search />
          <NewsCardList />
          <Preloader />
          <NoResults />
          <About />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
