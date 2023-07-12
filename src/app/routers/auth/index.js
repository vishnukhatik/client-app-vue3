const auth = [
  {
    path: "/auth",
    name: "Auth",
    component: "",
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/app/auth/components/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/app/auth/components/Register.vue"),
      },
    ],
  },
];
export default auth;
