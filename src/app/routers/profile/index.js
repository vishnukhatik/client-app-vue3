const profile = [
  {
    path: "/developers",
    name: "Profiles",
    component: () => import("@/app/profiles/components/Profiles.vue"),
  },
  {
    path: "/developer",
    name: "Profile",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
  },
];
export default profile;
