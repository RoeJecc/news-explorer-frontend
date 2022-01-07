import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Search from "../Search/Search";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Preloader />
      <NoResults />
      <NewsCardList />
      <About />
      <SavedNewsHeader />
      <SavedNews />
    </div>
  );
}

export default App;
