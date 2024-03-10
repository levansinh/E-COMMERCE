import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import APP_ENV from '@/config/appEnv.config';

console.log(import.meta.env);

const http = axios.create({
  baseURL: APP_ENV.baseApiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const newConfig = config;

    const token = localStorage.getItem('auth_token');
    console.log(token);

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    // if (newConfig.data) {
    //   newConfig.data = JSON.stringify(snakecaseKeys(config.data));
    // }

    return newConfig;
  },
  (error) => {
    console.log('HTTP-REQUEST-ERROR:', error);
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    const newResponse = response;

    if (newResponse && newResponse.data) {
      const responseData = newResponse.data;
      // responseData = camelcaseKeys(newResponse, {
      //   deep: true
      // });

      if (responseData?.data?.data.authToken) {
        localStorage.setItem('auth_token', responseData?.data?.data.authToken);
      }

      if (responseData?.data.status === 401) {
        localStorage.setItem('auth_token', '');
      }

      return responseData;
    }

    return newResponse.data;
  },
  (error) => {
    console.log('HTTP-RESPONSE-ERROR:', error);
    Promise.reject(error);
  }
);

export default http;
