<template>
  <div class="bg-black min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-5">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>
