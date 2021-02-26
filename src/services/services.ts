import { IService } from '@/interfaces/interfaces';
import helper from './helpers/helpers';
import adapter from './helpers/adapter';
import appConfig from '../appConfig';

export default class Service implements IService {
  public serverUrl: string;
  public fileExt: string;
  public RequestParams: object;
  constructor() {
    this.serverUrl = appConfig.SERVER_URL;
    this.fileExt = appConfig.FILE_EXT;
    this.RequestParams = appConfig.DEFAULT_HEADERS;
  }

  public async getData(key: string, params: object = this.RequestParams, postData: object = {}) {
    const url = this.serverUrl + key + this.fileExt;
    try {
      const dataFromStorage = await helper.getDataFromLocalStorage(key);
      const resp = dataFromStorage || await helper.getDataFromServer(url, params); // errors posible.
      const HashMap = adapter.ArrayToHashMap(resp); // O(1) access to data everywhere instead cicles
      return HashMap;
    } catch (error) {
      throw new Error(`"Service.getData": Can\'t get data "${key}": ${error}`);
    }
  }

  public freezStateByeKey(key, stateItem) {
    const arr = adapter.HashMapToArray(stateItem);
    helper.setDataToLocalStorage(key, arr);
  }

  public sendOrder(id: number): boolean {
    return true;
  }

  public deleteOrder(id: number): boolean {
    return true;
  }

}
