<template>
  <h1 ref="helloPerson" class="text-white before-enter">
    <span class="text-accent font-bold"
      >Hello person. Welcome to this place.</span
    >
  </h1>
  <div ref="textSection" class="mt-8 w-full max-w-2xl before-enter">
    <p class="leading-7">
      My name is Dmitrij Tkačenko. Born in Russia, raised in Czechia. My
      injuries from football career got me to a software world. Since then I
      learn about programming and making things every day.
    </p>

    <p class="mt-3 leading-7">
      During my studies at
      <a
        href="https://fel.cvut.cz/en/"
        target="__blank"
        rel="nofollow,norefferer"
        >CTU FEE</a
      >
      I worked at a few companies creating web applications. During last year of
      bachelor's degree I decided to freelance and founded
      <a href="https://dasher.cz" target="__blank">Dasher</a> with small group
      of developers and designers.
    </p>
    <p class="mt-3 leading-7">
      My daily driver stack is Docker, Typescript (NodeJS), Graphql and VueJS.
      But I always try to select a technology which meets requierements or is
      best for resolving a problem.
    </p>
    <p class="mt-3 leading-7">
      Sometimes, I also write articles. I share things I learned or experienced
      about software. You can find them on
      <router-link to="/articles">&lt;articles&gt;</router-link> page.
    </p>
    <p class="mt-3 leading-7">
      I mention a few projects I've been working on. You can find them on
      <router-link to="/projects">&lt;projects&gt;</router-link> page.
    </p>
    <p class="mt-3 leading-7">
      Check some links below and get to know me better.
    </p>
  </div>
  <div ref="links" class="mt-8 before-enter">
    <SocialLinks />
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";
export default {
  components: {
    SocialLinks
  },
  mounted() {
    // animate section sequentially from top to bottom
    setTimeout(() => {
      this.$refs.helloPerson.classList.add("enter");
    }, 200);
    setTimeout(() => {
      this.$refs.textSection.classList.add("enter");
    }, 500);
    setTimeout(() => {
      this.$refs.links.classList.add("enter");
    }, 700);
  }
};
</script>
