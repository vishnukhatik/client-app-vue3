const layout = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/app/core/components/layout/Landing.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/app/dashboard/components/Dashboard.vue"),
  },
];
export default layout;
