<template>
  <div class="relative mt-16 lg:mt-32 mb-8 overflow-hidden">
    <Hi />
    <div
      class="relative lg:absolute mx-auto w-40 lg:right-0 lg:bottom-0 before-enter"
      ref="icecream"
    >
      <transition name="icecream-leave">
        <IceCreamLottie
          v-if="!iceCreamLeaved"
          class="cursor-pointer active:transform active:scale-110 active:transition-all active:duration-150"
          :speed="iceCreamSpeed"
          @click="handleIceCreamClick"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Hi from "../components/Hi.vue";
import IceCreamLottie from "../components/IceCreamLottie.vue";
export default {
  name: "Home",
  components: {
    Hi,
    IceCreamLottie
  },
  data() {
    return {
      clicksRemaining: 15,
      iceCreamSpeed: 1,
      iceCreamLeaved: false
    };
  },
  mounted() {
    // animate icecream entrance
    setTimeout(() => {
      this.$refs.icecream.classList.value =
        this.$refs.icecream.classList.value + " enter";
    }, 500);
  },
  methods: {
    handleIceCreamClick() {
      if (this.iceCreamLeaved) {
        return;
      }

      if (this.clicksRemaining < 1) {
        this.iceCreamLeaved = true;
        return;
      }

      this.iceCreamSpeed += 0.5;
      this.clicksRemaining--;
    }
  }
};
</script>

<style scoped>
.before-enter {
  opacity: 0;
  transform: translate(150%) scale(0.9);
  transition: all 3s cubic-bezier(0.86, 0, 0.07, 1);
}

.enter {
  opacity: 1;
  transform: translate(0);
}

.icecream-leave-leave-active {
  animation: jump-leave 2s cubic-bezier(0.86, 0, 0.07, 1);
}

.icecream-leave-enter-active {
  animation: jump-leave 2s cubic-bezier(0.86, 0, 0.07, 1) reverse;
}

@keyframes jump-leave {
  40% {
    transform: translateY(-50%);
    opacity: 0.8;
  }
  to {
    transform: translateY(150%);
    opacity: 0.2;
  }
}
</style>
