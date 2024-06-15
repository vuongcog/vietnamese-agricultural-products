import httpClient from "./httpClient";
class Http {
  endpoint = null;

  http = httpClient(true);

  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  create = (params = {}, options) => {
    return this.http.post("/search", params, options);
  };
  list = (params = {}, page = 1, ppp = 20) => {
    return this.http.get(this.endpoint, params);
  };
  post = (params = {}, options) => {
    return this.http.post("/search", params, options);
  };
}

export default Http;
