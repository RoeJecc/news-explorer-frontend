import { useState, useEffect } from "react";

function NewsCard({
  data,
  onSavedNews,
  loggedIn,
  onSignInClick,
  savedArticles,
  onSaveArticleClick,
  onDeleteArticleClick,
}) {
  const [isSaved, setIsSaved] = useState(false);

  function handleLoginButton() {
    onSignInClick();
  }

  useEffect(() => {
    if (savedArticles) {
      setIsSaved(savedArticles.find((article) => article.title === data.title));
    }
  }, [data.title, savedArticles]);

  function handleSaveClick(data) {
    if (isSaved) {
      onDeleteArticleClick(data);
    } else {
      onSaveArticleClick(data);
    }
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
          onClick={() => onDeleteArticleClick(data)}
        ></button>
      ) : (
        <button
          className={saveCardButtonClassName}
          type="button"
          onClick={() => handleSaveClick(data)}
        ></button>
      )}

      {isSaved && <div className="news-card__tooltip">Remove from saved</div>}
      {isSaved && onSavedNews && (
        <div className="news-card__tooltip news-card__tooltip_keyword">
          {data.keyword}
        </div>
      )}
      {!onSavedNews ? (
        <img
          className="news-card__image"
          alt="Newscard Image"
          src={data.urlToImage}
        />
      ) : (
        <img className="news-card__image" src={data.image} />
      )}
      <a
        className="news-card__link"
        target="_blank"
        rel="noreferrer"
        href={data.link}
      >
        <div className="news-card__info">
          <p className="news-card__date">{convertDate()}</p>
          <h2 className="news-card__title">{data.title}</h2>
          {onSavedNews ? (
            <p className="news-card__description">{data.text}</p>
          ) : (
            <p className="news-card__description">{data.description}</p>
          )}
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
      <a
        className="news-card__link"
        href={data.url}
        target="_blank"
        rel="noreferrer"
      >
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
