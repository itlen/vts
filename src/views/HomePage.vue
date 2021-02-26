<template>
  <div class="home">
    <h1>Hotels list</h1>
    <hr />
    <hotels-list :list="this.hotels.values()"></hotels-list>
  </div>
</template>

<script>
import HotelsList from "@/components/HotelsList.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    HotelsList,
  },

  computed: {
    ...mapGetters(["hotels"]),
  },

  created() {
    this.$store.dispatch("actionGetHotels");
  },
};
</script>
