import httpClient from "./httpClient";
class HttpUserClient {
  url = null;

  http = httpClient(false);

  constructor(url) {
    this.url = url;
  }
  getItems = (param = {}, options = {}) => {
    return this.http.get(`${this.url}`, param, options);
  };

  getItem = (params = {}) => {
    const option = {
      notAuthor: true,
    };
    const id = params.id;
    delete params.id;
    return this.http.get(`https://api.zippopotam.us/us/${id}`, params, option);
  };

  getProduct = (params = {}, options = {}) => {
    return this.http.get(this.url, params, options);
  };
}

export default HttpUserClient;
