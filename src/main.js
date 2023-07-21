import { createApp } from "vue";
import App from "./app/App.vue";
import router from "@/app/routers/index";
import "@/assets/css/style.css";
import store from "@/app/store";

createApp(App).use(store).use(router).mount("#app");
