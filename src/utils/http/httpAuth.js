import { generateURL } from "../generateURL";
import httpClient from "./httpClient";
class HttpAuth {
  endpoint = null;

  http = httpClient(false);
  constructor(endpoint) {
    console.log("authasd");
    this.endpoint = endpoint;
  }
  login = (params = {}, options) => {
    const url = generateURL(import.meta.env.VITE_API_URL_SERVER, "/login");
    console.log("helloasdasd");
    return this.http.post(url, params, options);
  };
}

export default HttpAuth;
