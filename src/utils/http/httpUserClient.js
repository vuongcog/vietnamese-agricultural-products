import httpClient from './httpClient';
class HttpUserClient {
  url = null;

  http = httpClient(false);

  constructor(url) {
    this.url = url;
  }
  getItems = (param = {}, options = {}) =>
    this.http.get(`${this.url}`, param, options);

  getCategories = (params = {}, options = {}) =>
    this.http.get(this.url, params, options);

  getItem = (params = {}) => {
    const option = {
      notAuthor: true,
    };
    const id = params.id;
    delete params.id;
    return this.http.get(`https://api.zippopotam.us/us/${id}`, params, option);
  };
  addCart = (params = {}, options = {}) => this.http.post(this.url, params, options);
  getCarts = (option = {}) => this.http.get(this.url, {}, option);

  getProduct = (params = {}, options = {}) => this.http.get(this.url, params, options);
}

export default HttpUserClient;
