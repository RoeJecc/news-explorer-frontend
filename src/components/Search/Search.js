function Search() {
  return (
    <section className="search">
      <div className="search__container" alt="">
        <h1 className="search__title">What's going on in the world?</h1>
        <p className="search__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form">
          <input className="search__input"></input>
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Search;
