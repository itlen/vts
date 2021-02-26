import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import api from './services/api';

Vue.use(api); // for example

Vue.config.productionTip = false;

Vue.filter('datefromunixtime', (value: number) => {
  return !!value ? new Date(value).toLocaleDateString() : '';
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
