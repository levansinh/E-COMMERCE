import axios, { AxiosError, AxiosInstance } from 'axios';
import APP_ENV from '@/config/appEnv.config';
import { toast } from 'react-toastify';
import { AuthResponse } from '@/types/auth';
import { clearAccessTokenFromLS, saveAccessTokenToLS } from '@/utils/auth.utils';

class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = '';
    this.instance = axios.create({
      timeout: 10000,
      baseURL: APP_ENV.baseApiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = 'Bearer' + this.accessToken;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if (url === '/login' || url === '/register') {
          this.accessToken = (response.data as AuthResponse).data.access_token;
          saveAccessTokenToLS(this.accessToken);
        } else if (url === '/logout') {
          this.accessToken = '';
          clearAccessTokenFromLS();
        }
        return response;
      },

      function (error: AxiosError) {
        if (error.response?.status !== HTTP_STATUS_CODE.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;
          toast.error(message);
        }
      }
    );
  }
}

const http = new Http().instance;

export default http;
