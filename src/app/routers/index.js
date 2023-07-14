import { createRouter, createWebHistory } from "vue-router";
import auth from "@/app/routers/auth/index";
import layout from "@/app/routers/layout/index";
import profile from "@/app/routers/profile/index";
import notFound from "@/app/routers/not_found/index";
const IsAuthenticated = localStorage.getItem("client-token");
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      component: "",
      children: layout,
      beforeEnter(to, from, next) {
        if (IsAuthenticated) next();
        next("/auth/login");
      },
    },
    ...auth,
    ...profile,
    ...notFound,
  ],
});
router.beforeEach((to, from) => {
  console.log("to:", to);
  console.log("from:", from);
});
export default router;
