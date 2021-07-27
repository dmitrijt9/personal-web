<template>
  <nav id="nav" class="flex items-center justify-between gap-3">
    <div class="flex items-center">
      <!-- <router-link class="relative group" to="/">
        <div
          class="relative h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded border-2 border-white group-hover:border-accent duration-150 ease-linear overflow-hidden"
        >
          <img
            src="/me.png"
            alt="Dmitrij Tkačenko"
            class="relative w-full h-full"
          />
          <div
            class="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 mix-blend-multiply transition-opacity duration-150 ease-linear"
          ></div>
        </div>
      </router-link> -->

      <div class="text-lg text-white">Dmitrij T.</div>
    </div>
    <div class="block md:hidden" :class="{ hidden: menuOpen }">
      <button @click="menuOpen = true">
        <menu-alt-4-icon class="w-6 h-6 text-white" />
      </button>
    </div>
    <div class="hidden md:inline-flex flex-1 gap-6 items-center justify-end">
      <router-link v-for="route in routes" class="text-base" :to="route.path"
        >&lt;{{ route.label }}&gt;</router-link
      >
      <a class="text-base" href="mailto:dimot9@gmail.com">
        &lt;contact&gt;
      </a>
    </div>
    <transition name="fade">
      <div
        v-show="menuOpen"
        class="fixed inset-0 bg-black bg-opacity-90 flex flex-col px-4 py-5 z-10"
      >
        <div class="flex justify-between">
          <div class="flex items-center">
            <!-- <router-link class="relative group" to="/">
              <div
                class="relative h-10 w-10 rounded border-2 border-white group-hover:border-accent duration-150 ease-linear overflow-hidden"
              >
                <img
                  src="/me.png"
                  alt="Dmitrij Tkačenko"
                  class="relative w-full h-full"
                />
                <div
                  class="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 mix-blend-multiply transition-opacity duration-150 ease-linear"
                ></div>
              </div>
            </router-link> -->

            <div class="text-lg text-white">Dmitrij T.</div>
          </div>
          <button @click="menuOpen = false">
            <x-icon class="w-6 h-6 text-white" />
          </button>
        </div>
        <transition name="swipe">
          <div
            v-show="menuOpen"
            class="my-16 flex flex-1 flex-col justify-end items-end"
          >
            <router-link
              v-for="route in routes"
              :to="route.path"
              class="inline-flex px-4 py-5 text-lg"
              >&lt;{{ route.label }}&gt;</router-link
            >
            <a
              class="inline-flex px-6 py-4 text-lg"
              href="mailto:dimot9@gmail.com"
            >
              &lt;contact&gt;
            </a>
          </div>
        </transition>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, reactive } from "vue";
import { MenuAlt4Icon, XIcon } from "@heroicons/vue/outline";
export default {
  components: {
    MenuAlt4Icon,
    XIcon
  },
  setup() {
    const menuOpen = ref(false);
    const routes = reactive([
      {
        label: "home",
        path: "/"
      },
      {
        label: "articles",
        path: "/articles"
      },
      {
        label: "projects",
        path: "/projects"
      }
    ]);
    return {
      menuOpen,
      routes
    };
  }
};
</script>

<style scoped>
#nav a:not(.router-link-active) {
  @apply text-white hover:text-accent transition-colors duration-150 ease-linear;
}
.router-link-active {
  @apply text-gray-400;
}
.swipe-enter-active,
.swipe-leave-active {
  @apply transition-all duration-200 ease-in;
  transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
}
.swipe-enter-from,
.swipe-leave-to {
  @apply translate-x-full;
  transform: translate(80%);
}

.swipe-enter-to,
.swipe-leave-from {
  @apply translate-x-0;
  transform: translate(0);
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
