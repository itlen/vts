import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '../views/HomePage.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/hotel/:hid',
    name: 'HotelPage',
    props: true,
    component: () => import('../views/HotelPage.vue'),
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../views/CartPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
