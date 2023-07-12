const profile = [
  {
    path: "/developers",
    name: "Profiles",
    component: () => import("@/app/profiles/components/Profiles.vue"),
  },
  {
    path: "/developer",
    name: "Profile",
    component: () => import("@/app/profiles/components/profile/Profile.vue"),
  },
];
export default profile;
