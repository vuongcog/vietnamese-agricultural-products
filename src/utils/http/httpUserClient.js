import httpClient from './httpClient';
class HttpUserClient {
  url = null;

  http = httpClient(true);

  constructor(url) {
    this.url = url;
  }
  getItems = (param = {}, options = {}) =>
    this.http.get(`${this.url}`, param, options);

  getCategories = (params = {}, options = {}) =>
    this.http.get(this.url, params, options);

  addCart = (params = {}, options = {}) =>
    this.http.post(this.url, params, options);
  deleteCart = (options = {}) => this.http.delete(this.url, options);
  getCarts = (option = {}) => this.http.get(this.url, {}, option);
  getBlogs = (option = {}) => this.http.get(this.url, {}, option);
  getBlog = (option = {}) => this.http.get(this.url, {}, option);
  getAllBlog = (option = {}) => this.http.get(this.url, {}, option);

  getDataUser = (option = {}) => this.http.get(this.url, {}, option);
  orderProduct = (params = {}, options = {}) =>
    this.http.post(this.url, params, options);

  updateCart = (params = {}, options = {}) =>
    this.http.post(this.url, params, options);
  getProduct = (params = {}, options = {}) =>
    this.http.get(this.url, params, options);
  getFeedback = (params = {}, options = {}) =>
    this.http.get(this.url, params, options);
  createFeedback = (params = {}, options = {}) =>
    this.http.post(this.url, params, options);
}

export default HttpUserClient;
