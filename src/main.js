import { createApp } from "vue";
import App from "./app/App.vue";
import router from "@/app/routers/index";
import "@/assets/css/style.css";

createApp(App).use(router).mount("#app");
