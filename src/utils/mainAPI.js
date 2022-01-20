import { BASE_URL } from "./constants";

class API {
    constructor({ baseURL, headers}) {
        this._baseURL = baseURL;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
             return Promise.reject(`Error: ${res.status}`);
        }
    }
}

const api = new API({
    baseURL: BASE_URL
});

export default api;