const profile = [
  {
    path: "/profiles",
    name: "Profiles",
    component: () => import("@/app/profiles/components/Profiles.vue"),
    props: true,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
    props: true,
  },
  {
    path: "/create-profile",
    name: "CreateProfile",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
  },
  {
    path: "/add-experience",
    name: "AddExperience",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
  },
  {
    path: "/add-education",
    name: "AddEducation",
    component: () => {
      return import("@/app/profile/components/Profile.vue");
    },
  },
];
export default profile;
