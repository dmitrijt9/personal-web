<template>
  <div class="flex flex-col space-y-6">
    <div v-for="project in projects" class="relative py-4">
      <div>
        <h2 class="text-white text-base font-bold">{{ project.title }}</h2>
        <p class="mt-2 text-base text-gray-300">
          {{ project.description }}
        </p>
      </div>
      <a
        v-if="project.link"
        class="mt-3 inline-flex items-center gap-2 text-accent hover:text-white transition-all duration-200 ease-linear"
        :href="project.link.url"
      >
        <LinkIcon class="w-5 h-5" />
        {{ project.link.label }}
      </a>
    </div>
  </div>
</template>

<script>
import { LinkIcon } from "@heroicons/vue/outline";
export default {
  components: {
    LinkIcon
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>
