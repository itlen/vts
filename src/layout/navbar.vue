<template>
  <nav class="row">
    <div class="nav-wrapper">
      <ul>
        <li>
          <router-link tag="a" :to="{ name: 'HomePage' }" class="brand-logo"
            >Hotels</router-link
          >
        </li>
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link tag="li" to="/cart" exact active-class="active">
          <a href="sass.html">
            <span>Booked hotels ({{ this.cartCount }})</span>
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
  name: "navbar",
  computed: {
    ...mapGetters(["cartCount"]),
  },
};
</script>