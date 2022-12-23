import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Form Case" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.afterEach((to) => {
  const baseTitle = "Vue + Vite";

  if (to.name === "index") {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
