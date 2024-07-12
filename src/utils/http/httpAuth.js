import { generateURL } from '../generate-url';
import httpClient from './httpClient';
class HttpAuth {
  endpoint = null;

  http = httpClient(false);
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  login = (params = {}, options) => {
    const url = generateURL(import.meta.env.VITE_API_URL_SERVER, '/login');
    return this.http.post(url, params, options);
  };
}

export default HttpAuth;
