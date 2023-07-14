const layout = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/app/core/components/layout/Landing.vue"),
    meta: { auth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/app/dashboard/components/Dashboard.vue"),
    meta: { auth: true },
  },
];
export default layout;
