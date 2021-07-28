<template>
  <div class="flex flex-col space-y-12">
    <a
      v-for="article in articles"
      :href="article.link"
      class="relative px-6 py-4 border-white border-2 border-r-transparent border-t-transparent hover:border-accent hover:border-t-accent hover:border-r-accent transition-all duration-200 ease-linear group"
    >
      <div>
        <h2 class="text-white text-lg">{{ article.title }}</h2>
        <p class="mt-2 text-base text-gray-300 max-w-md">
          {{ article.description }}
        </p>
      </div>
      <LinkIcon
        class="absolute bottom-4 right-6 hidden w-6 h-6 text-white group-hover:block transform -translate-x-4 group-hover:translate-x-0 transition-all duration-200 ease-linear "
      />
    </a>
  </div>
</template>

<script>
import { LinkIcon } from "@heroicons/vue/outline";
export default {
  components: {
    LinkIcon
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
};
</script>
