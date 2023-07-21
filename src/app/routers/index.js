import { createRouter, createWebHistory } from "vue-router";
import auth from "@/app/routers/auth/index";
import layout from "@/app/routers/layout/index";
import profile from "@/app/routers/profile/index";
import notFound from "@/app/routers/not_found/index";
const router = createRouter({
  history: createWebHistory(),
  routes: [...layout, ...auth, ...profile, ...notFound],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("client-token");
  console.log(to.meta.auth);
  console.log("logged in", loggedIn);
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (to.meta.auth && !loggedIn) {
    next({ name: "Login" });
  } else {
    next();
  }
});
export default router;

// guard(to, from, next);
