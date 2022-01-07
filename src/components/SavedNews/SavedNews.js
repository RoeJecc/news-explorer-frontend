import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  return (
    <section className="saved-card-list">
      <div className="saved-card-list__container">
        <ul className="saved-card-list__grid">
          <li className="saved-card-list__card">
            <NewsCard />
          </li>
        </ul>
      </div>
    </section>
  );
}


export default SavedNews;