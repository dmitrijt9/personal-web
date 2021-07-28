<template>
  <div ref="container" @click="$emit('click')"></div>
</template>
<script>
import lottie from "lottie-web";
import animationData from "../assets/lottie/zmrzlinka.json";

export default {
  name: "ice-cream-lottie",
  props: {
    speed: Number
  },
  data() {
    return {
      animation: null,
      animationData
    };
  },
  watch: {
    speed(newSpeed) {
      this.animation.setSpeed(newSpeed);
    }
  },
  mounted() {
    this.animation = lottie.loadAnimation({
      container: this.$refs.container,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: this.animationData
    });
  }
};
</script>
