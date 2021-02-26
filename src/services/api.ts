/**
 * Just fore example in Hotel component.
 */
import Service from './services';
const service = new Service();
export default {

  install(Vue, options) {
    Vue.prototype.$apiGet = async (key, params) => {
      return await service.getData(key, params);
    };
  },


};
