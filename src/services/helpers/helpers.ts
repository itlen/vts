export default {

  async getDataFromServer(url: string, params: object) {
    try {
      return fetch(url, params).then((response) => response.json());
    } catch (error) {
      throw new Error(`Helper "getDataFromServer" : Can\'t get data "${url}": ${error}`);
    }
  },

  async getDataFromLocalStorage(key: string) {
    try {
      const tmp = localStorage.getItem(key) || '';
      if (tmp) { return JSON.parse(tmp); }
    } catch (error) {
      throw new Error(`Helper "getDataFromLocalStorage" : Can\'t get data "${key}": ${error}`);
    }
  },

  async setDataToLocalStorage(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

};
