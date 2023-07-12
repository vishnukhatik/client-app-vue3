import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      redirect: { name: "Dashboard" },
      component: () => import("@/app/core/components/layout/Landing.vue"),
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("@/app/core/components/layout/Landing.vue"),
        },
        {
          path: "/login",
          name: "Login",
          component: () => import("@/app/auth/components/Login.vue"),
        },
      ],
    },
  ],
});

export default router;
