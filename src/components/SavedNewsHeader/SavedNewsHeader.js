import { useState, useEffect } from "react";

function SavedNewsHeader({
  onSavedNews,
  setNewsCardListShown,
  setSearchKeyword,
  currentUser
}) {
  return (
    <section className="saved-header">
      <div className="saved-header__container">
        <p className="saved-header__title">Saved articles</p>
        <h2 className="saved-header__articles">
          {currentUser.email}, you have 0 saved articles.
        </h2>
        <p className="saved-header__keywords">
          By keywords:
          <span className="saved-header__keywords_bold"> keyword</span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
