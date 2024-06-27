import httpClient from "./httpClient";
class HttpUserClient {
  endpoint = null;

  http = httpClient(false);

  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  getItems = (param = {}, options = {}) => {
    return this.http.post(`https://google.serper.dev/search`, param, options);
  };
  getItem = (params = {}) => {
    const option = {
      notAuthor: true,
    };
    const id = params.id;
    delete params.id;
    return this.http.get(`https://api.zippopotam.us/us/${id}`, params, option);
  };
}

export default HttpUserClient;
