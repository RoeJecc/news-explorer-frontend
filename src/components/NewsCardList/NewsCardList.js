import NewsCard from "../NewsCard/NewsCard.js";

function NewsCardList() {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
          <h3 className="news-card-list__title">Search results</h3>
          <ul className="news-card-list__grid">
              <li className="news-card-list__card">
                  <NewsCard />
              </li>
              <li className="news-card-list__card">
                  <NewsCard />
              </li>
              <li className="news-card-list__card">
                  <NewsCard />
              </li>
              <li className="news-card-list__card">
                  <NewsCard />
              </li>
              <li className="news-card-list__card">
                  <NewsCard />
              </li>
              <li className="news-card-list__card">
                  <NewsCard />
              </li>
          </ul>
          <button className="news-card-list__show-more">Show more</button>
      </div>
    </section>
  );
}

export default NewsCardList;
