const profile = [
  {
    path: "/profiles",
    name: "Profiles",
    component: () => import("@/app/profiles/components/Profiles.vue"),
    meta: { auth: true },
    props: true,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
    meta: { auth: true },
    props: true,
  },
  {
    path: "/create-profile",
    name: "CreateProfile",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
    meta: { auth: true },
  },
  {
    path: "/add-experience",
    name: "AddExperience",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
    meta: { auth: true },
  },
  {
    path: "/add-education",
    name: "AddEducation",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
    meta: { auth: true },
  },
];
export default profile;
