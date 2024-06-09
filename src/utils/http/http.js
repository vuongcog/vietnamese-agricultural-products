import httpClient from "./httpClient";
class Http {
  endpoint = null;

  http = httpClient(true);

  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  list = (params = {}, page = 1, ppp = 20) => {
    return this.http.get("/search", params);
  };
  post = (params = {}, options) => {
    return this.http.post("/search", params, options);
  };
}

export default Http;
