import { useState } from "react";

function NewsCard({ data, onSavedNews, loggedIn, onSignInClick }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSaveClick() {
    saveCard();
  }

  function handleLoginButton() {
    onSignInClick();
  }

  function saveCard() {
    if (isSaved) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
  }

  const saveCardButtonClassName = `news-card__button ${
    isSaved ? "news-card__button_blue" : ""
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

    let articleDate = onSavedNews ? data.date : data.publishedAt; // original date in ISOstring format
    let newDate = new Date(articleDate?.slice(0, 10)); // get date without time
    let convertedDate = `${
      months[newDate.getMonth()]
    } ${newDate.getDate()},  ${newDate.getFullYear()}`; // convert date to correct format

    return convertedDate;
  }
  return loggedIn ? (
    <div className="news-card">
      <button
        className={saveCardButtonClassName}
        type="button"
        onClick={() => handleSaveClick()}
      ></button>
      {isSaved && loggedIn && (
        <div className="news-card__tooltip">Remove from saved</div>
      )}
      <img className="news-card__image" src={data.urlToImage} />
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
      <div className="news-card__tooltip news-card__tooltip_keyword">
        {data.keyword}
      </div>
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
