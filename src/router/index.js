import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      name: "main",
    };
  }
});

export default router;
