const notFound = [
  {
    path: "/:notFound(.*)*",
    name: "NotFound",
    component: () => import("@/app/not_found/components/Index.vue"),
  },
];
export default notFound;
