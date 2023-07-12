import { createApp } from "vue";
import App from "./app/App.vue";
import Router from "@/app/routers/index";
import "@/assets/css/style.css";

createApp(App).use(Router).mount("#app");
