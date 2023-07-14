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
        meta: { auth: false },
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/app/auth/components/Register.vue"),
        meta: { auth: false },
      },
    ],
  },
];
export default auth;
