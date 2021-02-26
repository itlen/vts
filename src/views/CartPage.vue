<template>
  <section>
    <h1>Корзина заказов</h1>
    <hr />
    <cart :cartItems="joinOrdersAndHotelsInfo()" />
  </section>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component';
import { Join } from '@/mixins/mixins';
import Cart from '@/components/Cart.vue';
import { mapGetters } from 'vuex';

@Component({
  components: { Cart },
  computed: mapGetters(['orders', 'hotels', 'bookedHotels']),
})
export default class CartPage extends mixins(Join) {}
</script>