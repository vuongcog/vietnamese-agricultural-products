import httpClient from "./httpClient";
class Http {
  endpoint = null;

  http = httpClient(true);

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  list = (params = {}) => {
    return this.http.get(this.endpoint, params);
  };

  create = (params = {}) => {
    return this.http.post(this.endpoint, params);
  };
  update = (params = {}) => {
    return this.http.post(this.endpoint, params);
  };
  delete = (options = {}) => {
    return this.http.delete(this.endpoint, options);
  };
  post = (params = {}, options) => {
    return this.http.post("/search", params, options);
  };
  sendMail = (params = {}, options) => {
    return this.http.post("/sendmail", params, options);
  };
}

export default Http;
