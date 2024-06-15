import axios from "axios";
import _ from "lodash";
import $ from "jquery";
import { data } from "autoprefixer";
const httpClient = (isEndpoint = false) => {
  const parseToken = JSON.parse(localStorage.getItem("accessToken"));
  const accessToken = parseToken?.access_token;
  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${accessToken}}`,
  };
  if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;

  const cancelTokenSource = axios.CancelToken.source();
  const defaultOptions = {
    responseType: "json",
    headers,
    cancelToken: cancelTokenSource.token,
    transformResponse: (data) => {
      const dataEror = _.cloneDeep(data, "error.code");
      if (
        dataEror &&
        dataEror === 401 &&
        !location.pathname.includes("/auth")
      ) {
        window.localStorage.removeItem("accessToken");
      }
      return data;
    },
  };
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        (error.response.status === 401 &&
          error.response.data.error.message === "Token is inactive") ||
        error.response.data.error.message === "Token expired"
      ) {
        return Promise.reject(error);
      }
    }
  );
  return {
    get: (url, params = {}, options = {}) => {
      // process.env.AP
      if (isEndpoint) {
        url = import.meta.env.VITE_API_URL_SERVER + url;
      }
      const cloneParams = { ...params };
      _.forEach(cloneParams, (item, key) => {
        if ((!item && item !== 0) || item === "ALL") {
          delete cloneParams[key];
        }
      });
      ////////////
      // if (cloneParams.page) {
      //   cloneParams.$skip = (cloneParams.page - 1) * cloneParams.$limit;
      //   delete cloneParams.page;
      // }

      if (!_.isEmpty(cloneParams)) {
        url = `${url}?${$.param(cloneParams)}`;
      }
      if (options.notAuthor) {
        console.log(true);
        delete defaultOptions.headers.Authorization;
      }

      return axios.get(url, {
        ...defaultOptions,
        ...options,
      });
    },

    post: (url, data = {}, options = {}) => {
      console.log("httpClient");
      // if (!options.ignoreAuth && !window.localStorage.getItem("accessToken")) {
      //   return new Promise((_, reject) => reject({}));
      // }
      if (data.status && data.status === "") {
        data.status = "inactive";
      }
      if (isEndpoint) {
        url = import.meta.env.VITE_API_URL_SERVER + url;
      }

      return axios.post(`${url}`, data, {
        ...defaultOptions,
        ...options,
      });
    },
  };
};
export default httpClient;
