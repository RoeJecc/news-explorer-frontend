import { API_KEY, PROXY_URL, ARTICLES_NUMBER } from "./constants";

const today = new Date();
const weekAgo = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class NewsAPI {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  searchArticles(keyword) {
    return fetch(
      `${
        this._baseURL
      }?q=${keyword}&from=${weekAgo.toISOString()}&to=${today.toISOString()}&language=en&sortBy=relevancy&pageSize=${ARTICLES_NUMBER}&apiKey=${API_KEY}`
    )
      .then((res) => this._checkResponse(res))
      .then((res) => res.articles);
  }
}

const newsAPI = new NewsAPI({
  baseURL: PROXY_URL,
  headers: {
    "Content-Type": "X-Api-Key",
    Accept: "application/json",
  },
});

export default newsAPI;
