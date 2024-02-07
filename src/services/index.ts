import axios from 'axios';
import { AUTH_URL } from '@/routes/urls';
class Service {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 3 * 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.instance.interceptors.request.use(async (config: any) => {
      if (config.url.indexOf(AUTH_URL.login) >= 0 || config.url.indexOf('/refreshToken') >= 0) {
        return config;
      }
      let accessToken;
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    });

    this.instance.interceptors.response.use((response) => {
      return response;
    });
  }

  async get(url: string, params?: object) {
    try {
      const response = await this.instance.get(url, { params });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async post(url: string, data?: object) {
    try {
      const response = await this.instance.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async update(url: string, data: string) {
    try {
      const response = await this.instance.put(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async put(url: string, data: object) {
    try {
      const response = await this.instance.put(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(url: string) {
    try {
      const response = await this.instance.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Service();
