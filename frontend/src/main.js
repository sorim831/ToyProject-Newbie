// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 📌 추가: router 가져오기

const app = createApp(App);

app.use(router); // 📌 추가: router를 앱에 연결
app.mount("#app");
