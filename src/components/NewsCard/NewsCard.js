import { useState } from "react";
import card from "../../images/dogcard.png";

function NewsCard({ data, onSavedNews, loggedIn, onSignInClick }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleLoginButton() {
    onSignInClick();
  }

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  const saveCardButtonClassName = `news-card__button ${
    isSaved ? "news-card__button_saved" : ""
  }`;

  function convertDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let articleDate = onSavedNews ? data.date : data.publishedAt;
    let newDate = new Date(articleDate?.slice(0, 10));
    let convertedDate = `${
      months[newDate.getMonth()]
    } ${newDate.getDate()},  ${newDate.getFullYear()}`;

    return convertedDate;
  }
  return loggedIn ? (
    <div className="news-card">
      {onSavedNews ? (
        <button
          className="news-card__button_saved-news"
          type="button"
          onClick={() => handleSaveClick()}
        ></button>
      ) : (
        <button
          className={saveCardButtonClassName}
          type="button"
          onClick={() => handleSaveClick()}
        ></button>
      )}

      {isSaved && <div className="news-card__tooltip">Remove from saved</div>}
      {!onSavedNews ? (
        <img className="news-card__image" alt="Newscard Image" src={data.urlToImage} />
      ) : (
        <img className="news-card__image" src={card} />
      )}
      <a className="news-card__link" href={data.link}>
        <div className="news-card__info">
          <p className="news-card__date">{convertDate()}</p>
          <h2 className="news-card__title">{data.title}</h2>
          <p className="news-card__description">{data.description}</p>
          <p className="news-card__source">{data.source?.name}</p>
        </div>
      </a>
    </div>
  ) : (
    <div className="news-card">
      <button
        className="news-card__button"
        onClick={handleLoginButton}
      ></button>
      <div className="news-card__tooltip">Sign in to save articles</div>
      <img className="news-card__image" src={data.urlToImage} />
      <a className="news-card__link" href={data.url}>
        <div className="news-card__info">
          <p className="news-card__date">{convertDate()}</p>
          <h2 className="news-card__title">{data.title}</h2>
          <p className="news-card__description">{data.description}</p>
          <p className="news-card__source">{data.source?.name}</p>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
