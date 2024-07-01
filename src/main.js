import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Lottie from "vue3-lottie";

import "./style.css";
import "@fontsource-variable/figtree";
import "@fontsource-variable/manrope";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Vue3Lottie);

app.mount("#app");

// createApp(App).mount("#app");
