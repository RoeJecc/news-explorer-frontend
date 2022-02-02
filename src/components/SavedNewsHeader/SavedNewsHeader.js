import { useState, useEffect } from "react";

function SavedNewsHeader({ currentUser, savedArticles }) {
  const [keywordArray, setKeywordArray] = useState([]);

  useEffect(() => {
    const allKeywordsArray = savedArticles.map((value) => value.keyword);

    allKeywordsArray.map(
      (keyword) => keyword.charAt(0).toUpperCase() + keyword.substr(1)
    );

    var countKeywords = allKeywordsArray.reduce(function (keyword, value) {
      keyword[value] = (keyword[value] || 0) + 1;
      return keyword;
    }, {});

    var sortedArray = Object.keys(countKeywords).sort(function (a, b) {
      return countKeywords[b] - countKeywords[a];
    });
    setKeywordArray(sortedArray);
  }, [savedArticles]);

  return (
    <section className="saved-header">
      <div className="saved-header__container">
        <p className="saved-header__title">Saved articles</p>
        <h2 className="saved-header__articles">
          {currentUser.name}, you have {savedArticles.length} saved articles.
        </h2>
        <p className="saved-header__keywords">
          By keywords: {''}
          <span className="saved-header__keywords_bold">
            {keywordArray.length > 3
              ? `${keywordArray[0]}, ${keywordArray[1]}, and ${
                  keywordArray.length - 2
                } others`
              : keywordArray.join(", ")}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
