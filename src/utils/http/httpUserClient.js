import httpClient from "./httpClient";
class HttpUserClient {
  endpoint = null;

  http = httpClient(false);

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

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
