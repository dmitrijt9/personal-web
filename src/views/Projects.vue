<template>
  <div class="relative mt-16 lg:mt-32 mb-8 overflow-hidden">
    <h1 ref="title" class="text-accent font-bold before-enter">
      Projects
    </h1>
    <div ref="description" class="mt-5 max-w-2xl before-enter">
      <p>
        My main focus these days is
        <a href="https://dasher.cz" target="__blank">Dasher</a>. There we create
        various web applications - client jobs and our own product. Some of them
        are mentioned below.
      </p>
      <p class="mt-3">
        As a freelancer I also externally help digital agency
        <a href="https://2fresh.cz" target="__blank">2Fresh</a> with their tech
        stack and time-to-time build some web app. Mostly competitions advised
        by companies like Nestle, Mars and others.
      </p>
      <p class="mt-3">
        Here are some of my projects from school, various work opportunities or
        created during my free time.
      </p>
    </div>

    <div ref="projectList" class="mt-12 max-w-2xl before-enter">
      <ProjectList class="" :projects="projects" />
    </div>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";

export default {
  components: {
    ProjectList
  },
  data() {
    return {
      projects: [
        {
          title: "Ekiskincare personal and booking web",
          description:
            "Eki is a skin care geek and my sister... I build a website for her and custom CMS, so that she can add workshops and plan her mentoring classes.",
          link: {
            label: "Visit Ekiskincare",
            url: "https://www.ekiskincare.cz"
          }
        },
        {
          title: "Image delivery service",
          description:
            "Service written in Go. It optimizes, crops and returns images from a source you want. It uses AI library which targets person face (if present) while cropping an image.",
          link: {
            label: "See Gitlab repo",
            url: "https://gitlab.com/dashers/image-delivery-service"
          }
        },
        {
          title: "Nuxt Tailwind Breakpoint Helper",
          description:
            "Nuxt module which adds a small widget to a viewport to see actual TailwindCSS screen size.",
          link: {
            label: "See NPM package",
            url:
              "https://www.npmjs.com/package/@dashers/nuxt-tailwind-breakpoint-helper"
          }
        },
        {
          title: "Linked Read",
          description:
            "School project worth mentioning. Web app for visualization of linked data about books and their authors. Using DBPedia Sparql endpoint as data source. A small dive to an open data.",
          link: {
            label: "Visit Linked Read",
            url: "https://linked-read.dimot.dev/"
          }
        },
        {
          title: "Team Management System",
          description:
            "TMS is a product of my bachelor thesis at CTU. For now it's a dead project, but want to finish it one day to help Czech football academies grow. Web application that connects coaches, players and their parents. The system is a center of all team data and information. It delivers a possibility to apply a modern trends of training for coaches. Players has another opportunity to enhance their skills and their parents get better overview about children’s and whole team activities.",
          link: {
            label: "See Gitlab repo",
            url: "https://gitlab.com/dimot9/team-management-system"
          }
        },
        {
          title: "Budweiser Mail Service",
          description:
            "Mail service API for web: https://www.budejovickybudvar.cz, which sends emails based on form that was filled and parameters in form selected. Project for 2Fresh."
        },
        {
          title: "Currates",
          description:
            "My first attempt of a mobile app. Provides fast conversion of most common rates.",
          link: {
            label: "See Github repo",
            url: "https://github.com/dmitrijt9/currates"
          }
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
      this.$refs.projectList.classList.add("enter");
    }, 500);
  }
};
</script>
