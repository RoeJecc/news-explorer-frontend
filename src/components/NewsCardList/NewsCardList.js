import NewsCard from "../NewsCard/NewsCard.js";
import { useEffect, useState } from "react";
import { CARDS_NUMBER } from "../../utils/constants";

function NewsCardList({
  onSavedNews,
  cards,
  shownCards,
  setShownCards,
  setNewsCardListShown,
  loggedIn,
  setLoggedIn,
  onSignInClick
}) {
  const [buttonShown, setButtonShown] = useState(false);
  const [next, setNext] = useState(3);

  useEffect(() => {
    if (!onSavedNews) {
      setShownCards(cards?.slice(0, 3));
    }
  }, [cards, onSavedNews, setShownCards]);

  useEffect(() => {
    if (shownCards?.length < cards?.length) {
      setButtonShown(false);
    } else {
      setButtonShown(true);
    }
  }, [shownCards?.length, cards?.length]);

  function handleShowMore() {
    setShownCards(cards.slice(0, next + CARDS_NUMBER));
    setNext(next + CARDS_NUMBER);
  }

  return onSavedNews ? (
    <section className="news-card-list news-card-list__saved-articles">
      <div className="news-card-list__container">
        <ul className="news-card-list__grid">
        {shownCards?.map((newscard, index) => (
            <li className="news-card-list__card" key={index}>
              <NewsCard data={newscard} onSavedNews={onSavedNews}  />
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section className="news-card-list">
      <div className="news-card-list__container">
        <h3 className="news-card-list__title">Search results</h3>
        <ul className="news-card-list__grid">
          {shownCards?.map((newscard, index) => (
            <li className="news-card-list__card" key={index}>
              <NewsCard loggedIn={loggedIn}
              setLoggedIn={setLoggedIn} data={newscard} onSavedNews={onSavedNews} onSignInClick={onSignInClick} />
            </li>
          ))}
        </ul>
        {!onSavedNews && !buttonShown && (
          <button
            className="news-card-list__show-more"
            onClick={handleShowMore}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
