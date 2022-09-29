import ApiService from './api';

class SessionApi extends ApiService {
  constructor() {
    if (SessionApi.instance) {
      return SessionApi.instance;
    }

    super('http://192.168.201.240:3001/session');
    SessionApi.instance = this;
  }

  async getCurrentSession() {
    const response = await this.http.get('/current');
    return response.data;
  }
}

const sessionApiInstance = new SessionApi();
export default sessionApiInstance;
