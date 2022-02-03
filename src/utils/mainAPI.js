import { BASE_URL } from "./constants";

class API {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getCurrentUser(token) {
    return fetch(this._baseUrl + "/users/me", {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getArticles(token) {
    return fetch(this._baseUrl + "/articles", {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  saveArticle(data, searchKeyword, token) {
    const {
      title,
      description: text,
      publishedAt: date,
      url: link,
      urlToImage: image,
    } = data;
    const source = data.source.name;
    const keyword =
      searchKeyword.charAt(0).toUpperCase() + searchKeyword.slice(1);

    return fetch(this._baseUrl + "/articles", {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteArticle(articleId, token) {
    return fetch(this._baseUrl + "/articles/" + articleId, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const api = new API({
  baseUrl: BASE_URL,
});

export default api;
