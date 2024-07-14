import httpClient from './httpClient';
class Http {
  endpoint = null;

  http = httpClient(true);

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  list = (params = {}) => this.http.get(this.endpoint, params);
  withId = () => this.http.get(this.endpoint);

  create = (params = {}) => this.http.post(this.endpoint, params);
  update = (params = {}) => this.http.post(this.endpoint, params);
  delete = (options = {}) => this.http.delete(this.endpoint, options);
  post = (params = {}, options) => this.http.post('/search', params, options);
  sendMail = (params = {}, options) =>
    this.http.post('/sendmail', params, options);
}

export default Http;
