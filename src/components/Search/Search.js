import { useState } from "react";

function Search({ onSearch, searchKeyword, setSearchKeyword }) {
  const [formInputValue, setFormInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter topic");

  function handleChange(e) {
    setSearchKeyword(e.target.value);
    setFormInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formInputValue) {
      setPlaceholder("Please enter a keyword");
    } else {
      onSearch(searchKeyword);
    }
  }

  return (
    <section className="search">
      <div className="search__container" alt="">
        <h1 className="search__title">What's going on in the world?</h1>
        <p className="search__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            placeholder={placeholder}
            value={formInputValue}
            onChange={handleChange}
          ></input>
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Search;
