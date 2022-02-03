const API_KEY = "d404288950734bd89cac344ed75365d7";
const PROXY_URL = "https://nomoreparties.co/news/v2/everything";
const CARDS_NUMBER = 3;
const ARTICLES_NUMBER = 100;
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.jrecc-news.students.nomoreparties.sbs"
    : "http://localhost:3000";

module.exports = {
  API_KEY,
  PROXY_URL,
  CARDS_NUMBER,
  ARTICLES_NUMBER,
  BASE_URL,
};
