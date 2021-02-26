<template>
  <div>
    <ul class="row">
      <li class="col s3" v-for="hotel in list" :key="hotel.id">
        <img class="responsive-img" :src="'/img/' + hotel.imgs[0]" alt="" />
        <router-link
          :to="{
            name: 'HotelPage',
            params: {
              hid: hotel.id,
            },
          }"
        >
          {{ hotel.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotelsList",
  props: {
    list: null,
  },
};
</script>















<style scop lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hotelsList {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  &__hotel {
    margin: 1rem 0;
    // border: 1px solid grey;
    flex-basis: 220px;

    &__img {
      max-width: 220px;
    }
  }
}
</style>
