import Vue from 'vue';
import Vuex from 'vuex';
import Service from '@/services/services';

const service = new Service();

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    hotels(state, getters) {
      return state._hotels;
    },
    bookedHotels(state, getters) {
      return new Set(state._bookedHotels);
    },
    orders(state, getters) {
      return state._orders;
    },
    cartCount(state, getters) {
      return state._bookedHotels.length;
    },
  },
  mutations: {
    m_book_hotel(state, hotelOrder) {
      const oid: number = hotelOrder.hotelId;
      state._bookedHotels.push(oid);

      state._orders.set(oid, hotelOrder);
      service.freezStateByeKey('orders', state._orders); // if it's important in every mutation - replace in vuex plugin

    },
    m_unbook_hotel(state, hotelId) {
      const set: any = new Set(state._bookedHotels);
      set.delete(hotelId);
      state._bookedHotels = Array.from(set);
      state._orders.delete(hotelId);
      service.freezStateByeKey('orders', state._orders); // if it's important ...
    },
    m_set_hotels(state, arr) {
      state._hotels = arr;
      service.freezStateByeKey('hotels', state._hotels); // if it's important ...
    },
  },
  actions: {
    async actionGetHotels({ commit }, payload) {
      const hotels = await service.getData('hotels');
      commit('m_set_hotels', hotels);
    },
    actionBookHotel(ctx, hotelOrder) {
      ctx.commit('m_book_hotel', hotelOrder);
    },
    actionUnBookHotel(ctx, hotelId) {
      ctx.commit('m_unbook_hotel', hotelId);
    },
  },
  state: {
    _hotels: new Map(),
    _bookedHotels: [],
    _orders: new Map(),
  },
});
