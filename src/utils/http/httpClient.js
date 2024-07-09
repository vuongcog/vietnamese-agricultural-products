import axios from 'axios';
import _ from 'lodash';
import $ from 'jquery';
import { getCookie } from '../cookie/parseCookie';
const httpClient = (isEndpoint = false) => {
  // const parseToken = JSON.parse(localStorage.getItem("accessToken"));
  const accessToken = getCookie('accsessToken');

  const headers = {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${accessToken}}`,
  };
  if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
  const cancelTokenSource = axios.CancelToken.source();
  const defaultOptions = {
    responseType: 'json',
    headers,
    cancelToken: cancelTokenSource.token,
    transformResponse: data => {
      const dataEror = _.cloneDeep(data, 'error.code');
      if (
        dataEror &&
        dataEror === 401 &&
        !location.pathname.includes('/auth')
      ) {
        window.localStorage.removeItem('accessToken');
      }
      return data;
    },
  };
  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (
  //       (error.response.status === 401 &&
  //         error.response.data.error.message === "Token is inactive") ||
  //       error.response.data.error.message === "Token expired"
  //     ) {
  //       return Promise.reject(error);
  //     }
  //   }
  // );
  return {
    get: (url, params = {}, options = {}) => {
      if (isEndpoint) {
        url = import.meta.env.VITE_API_URL_SERVER + url;
      }
      const cloneParams = { ...params };

      _.forEach(cloneParams, (item, key) => {
        if ((!item && item !== 0) || item === 'ALL') {
          delete cloneParams[key];
        }
      });

      if (!_.isEmpty(cloneParams)) {
        url = `${url}?${$.param(cloneParams)}`;
      }
      if (options.notAuthor) {
        delete defaultOptions.headers.Authorization;
      }
      return axios.get(url, {
        ...defaultOptions,
        ...options,
      });
    },

    post: (url, data = {}, options = {}) => {
      if (data.status && data.status === '') {
        data.status = 'inactive';
      }
      if (isEndpoint) {
        url = import.meta.env.VITE_API_URL_SERVER + url;
      }
      if (options.notAuthor) {
        delete defaultOptions.headers.Authorization;
      }
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      return axios.post(url, formData, {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
          'Content-Type': 'multipart/form-data', // Đảm bảo tiêu đề Content-Type là multipart/form-data
        },
      });
    },
    delete: (url, options = {}) => {
      console.log(url);
      if (isEndpoint) {
        url = import.meta.env.VITE_API_URL_SERVER + url;
      }
      return axios.delete(url, {
        ...defaultOptions,
        ...options,
      });
    },
  };
};
export default httpClient;
