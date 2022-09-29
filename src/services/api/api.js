import HttpService from '../http';
import LocalStorageService from '../localStorage';
import AuthContextRef from '../../contexts/authRef';

class ApiService {
  constructor(baseUrl) {
    this.http = new HttpService(baseUrl);

    this.http.addRequestInterceptor(async (axiosConfig) => {
      const accessToken = await LocalStorageService.getAccessToken();
      if (!accessToken) {
        return axiosConfig;
      }

      axiosConfig.headers = axiosConfig.headers || {}; // eslint-disable-line no-param-reassign
      axiosConfig.headers.Authorization = `Bearer ${accessToken}`; // eslint-disable-line no-param-reassign
      return axiosConfig;
    });

    this.http.addResponseInterceptor((response) => response, (error) => {
      const status = error.response ? error.response.status : null;
      const authContextRef = AuthContextRef.getInstance();

      if (error.config.url.includes('/refreshToken')) {
        if (authContextRef.isReady()) {
          authContextRef.reset();
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }

      if (status === 401) {
        return this.internalRefreshToken()
          .then((accessToken) => {
            if (!accessToken) {
              if (authContextRef.isReady()) {
                authContextRef.reset();
              }

              return Promise.reject(error);
            }

            error.config.headers.Authorization = `Bearer ${accessToken}`; // eslint-disable-line no-param-reassign
            return this.http.axios.request(error.config);
          })
          .catch(() => {
            return Promise.reject(error);
          });
      }

      return Promise.reject(error);
    });
  }

  async internalRefreshToken() {
    const refreshToken = await LocalStorageService.getRefreshToken();
    if (!refreshToken) {
      return null;
    }

    const response = await this.http.post('http://192.168.201.240:3001/session/refreshToken', { refreshToken });
    const tokens = response.data;

    await LocalStorageService.setAccessToken(tokens.accessToken);
    await LocalStorageService.setRefreshToken(tokens.refreshToken);

    return tokens.accessToken;
  }
}

export default ApiService;
