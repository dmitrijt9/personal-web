import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/articles",
    name: "Articles",
    // route level code-splitting
    // this generates a separate chunk (articles.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "articles" */ "../views/Articles.vue");
    }
  },
  {
    path: "/projects",
    name: "Projects",

    component: function() {
      return import("../views/Projects.vue");
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
