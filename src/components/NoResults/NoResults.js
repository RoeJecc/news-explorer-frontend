import noresultsimg from "../../images/noresults.png";

function NoResults() {
  return (
    <section className="no-results">
      <div className="no-results__container">
        <img
          className="no-results__image"
          alt="no results"
          src={noresultsimg}
        />
        <h3 className="no-results__title">Nothing found</h3>
        <p className="no-results__paragraph">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}

export default NoResults;
