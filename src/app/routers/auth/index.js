const auth = [
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("@/app/auth/components/Login.vue"),
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("@/app/auth/components/Register.vue"),
  },
];
export default auth;
