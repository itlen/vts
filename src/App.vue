<template>
  <div id="app">
    <header class="container">
      <navbar />
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import navbar from "./layout/navbar";

export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>