<template>
  <div class="relative mt-16 lg:mt-32 mb-8 overflow-hidden">
    <h1 ref="title" class="text-accent font-bold before-enter">
      Articles
    </h1>
    <p ref="description" class="mt-5 max-w-2xl before-enter">
      When I learn or create something new, I share my thoughts and experiences
      with others. There are some of my articles.
    </p>
    <div ref="articleList" class="before-enter">
      <ArticlesList class="mt-12 max-w-2xl" :articles="articles" />
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: [
        {
          title: "Go, Docker and Gitlab easy config",
          description:
            "How I wrote microservice in Go and deployed it as a Docker container using Gitlab CI.",
          link: "https://dev.to/dasher/nuxt-tailwind-breakpoint-helper-2a62"
        },
        {
          title: "Nuxt Tailwind Breakpoint Helper",
          description:
            "Article about Nuxt module, which makes coding with TailwindCSS even more enjoyable.",
          link: "https://dev.to/dmitrijt9/go-docker-and-gitlab-easy-config-20be"
        }
      ]
    };
  },
  mounted() {
    // animate section sequentially from top to bottom
    setTimeout(() => {
      this.$refs.title.classList.add("enter");
    }, 100);
    setTimeout(() => {
      this.$refs.description.classList.add("enter");
    }, 300);
    setTimeout(() => {
      this.$refs.articleList.classList.add("enter");
    }, 500);
  }
};
</script>
