import cardimg from "../../images/cardimage.png";
import { useState, useEffect } from "react";

function NewsCard({ data, onSavedNews }) {
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
  return onSavedNews ? (
    <div className="news-card">
      <button className="news-card__button"></button>
      <div className="news-card__tooltip">Sign in to save articles</div>
      <img className="news-card__image" src={data.urlToImage} />
      <a className="news-card__link" href="#">
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
      <button className="news-card__button"></button>
      <div className="news-card__tooltip">Sign in to save articles</div>
      <img className="news-card__image" src={data.urlToImage} />
      <a className="news-card__link" href="#">
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
