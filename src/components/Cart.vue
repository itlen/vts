<template>
  <div>
    <ul>
      <li class="cart-item row" v-for="(item, index) in cartItems" :key="index">
        <div class="col s3">
          <img class="col s12" :src="'img/' + item.imgs[0]" :alt="item.title" />
        </div>
        <div class="col s5">
          <h5>
            <router-link :to="{ name: 'HotelPage', params: { hid: hotelId, }, }"
          </h5>
          <h6>
            C <mark> {{ item.startDate | datefromunixtime }}</mark> по
            <mark>{{ item.endDate | datefromunixtime }}</mark>
          </h6>
          <p>Взрослые: {{ item.adults }}</p>
          <p>Дети: {{ item.kids }}</p>
        </div>
        <div class="col s4 right-align">
          {{ item.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Cart extends Vue {
  @Prop() private cartItems!: number;
}
</script>

<style scoped>
.cart-item {
  margin: 1.5rem 0;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  border: 1px solid rgb(236, 235, 235);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px !important;
}
</style>