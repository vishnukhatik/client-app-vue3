import { createStore } from "vuex";

// modules imported
import authModule from "@/app/auth/store/index";

const store = createStore({
  modules: {
    auth: authModule,
  },
});

export default store;
