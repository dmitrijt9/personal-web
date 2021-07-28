import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ScrollAnimation from "./directives/scrollanimation.js";
import "./index.css";

createApp(App)
  .use(router)
  .directive("scrollanimation", ScrollAnimation)
  .mount("#app");
