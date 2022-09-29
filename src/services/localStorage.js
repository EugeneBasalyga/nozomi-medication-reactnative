import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorageApi {
  constructor() {
    if (LocalStorageApi.instance) {
      return LocalStorageApi.instance;
    }

    this.asyncStorage = AsyncStorage;
    LocalStorageApi.instance = this;
  }

  async getAccessToken() {
    try {
      const value = await this.asyncStorage.getItem('accessToken');
      return value;
    } catch (err) {
      return err;
    }
  }

  async getRefreshToken() {
    try {
      const value = await this.asyncStorage.getItem('refreshToken');
      return value;
    } catch (err) {
      return err;
    }
  }

  async setAccessToken(value) {
    try {
      await this.asyncStorage.setItem('accessToken', value);
    } catch (err) {
      console.log(err);
    }
  }

  async setRefreshToken(value) {
    try {
      await this.asyncStorage.setItem('refreshToken', value);
    } catch (err) {
      console.log(err);
    }
  }

  async removeAccessToken() {
    try {
      await this.asyncStorage.removeItem('accessToken');
    } catch (err) {
      console.log(err);
    }
  }

  async removeRefreshToken() {
    try {
      await this.asyncStorage.removeItem('refreshToken');
    } catch (err) {
      console.log(err);
    }
  }
}

const localStorageApiInstance = new LocalStorageApi();
export default localStorageApiInstance;
