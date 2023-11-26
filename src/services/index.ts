import axios from 'axios'
import { BASE_URL } from 'src/configs'
import { PATH_AUTH } from 'src/routes/path'
class Service {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 3 * 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.instance.interceptors.request.use(async (config: any) => {
      if (config.url.indexOf(PATH_AUTH.login) >= 0 || config.url.indexOf('/refreshToken') >= 0) {
        return config
      }
      let accessToken
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }
      return config
    })

    this.instance.interceptors.response.use((response) => {
      return response
    })
  }

  async get(url: string) {
    try {
      const response = await this.instance.get(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  async post(url: string, data?: object) {
    try {
      const response = await this.instance.post(url, data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async update(url: string, data: string) {
    try {
      const response = await this.instance.put(url, data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async put(url: string, data: object) {
    try {
      const response = await this.instance.put(url, data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async delete(url: string) {
    try {
      const response = await this.instance.delete(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Service()
