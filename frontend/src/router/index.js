// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

// 📌 연결할 컴포넌트 import
import PersonalMain from "@/pages/PersonalMain.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
// 필요에 따라 추가로 import!

const routes = [
  { path: "/", component: PersonalMain },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupPage },
  // 추가할 경로 계속 나열
];

// 📌 Router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(), // 새로고침에도 주소가 깨지지 않게!
  routes, // 위에 작성한 경로 배열
});

export default router;
