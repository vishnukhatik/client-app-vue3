import { createRouter, createWebHistory } from "vue-router";
import auth from "@/app/routers/auth/index";
import layout from "@/app/routers/layout/index";
import profile from "@/app/routers/profile/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [...layout, ...auth, ...profile],
});

export default router;
