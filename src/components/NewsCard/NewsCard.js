import cardimg from "../../images/cardimage.png";

function NewsCard() {
  return (
    <div className="news-card">
      <button className="news-card__button"></button>
      <div className="news-card__tooltip">Sign in to save articles</div>
      <img className="news-card__image" src={cardimg}  />
      <a className="news-card__link" href="#">
        <div className="news-card__info">
          <p className="news-card__date">Date</p>
          <h2 className="news-card__title">Title</h2>
          <p className="news-card__description">Description</p>
          <p className="news-card__source">Source</p>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
