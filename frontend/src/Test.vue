<template>
  <!-- 메인 로고와 환영 메시지를 렌더링 -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// HelloWorld 컴포넌트를 가져와서 사용
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App", // 이 컴포넌트의 이름을 App으로 설정
  components: {
    HelloWorld, // HelloWorld 컴포넌트를 등록해서 template에서 사용 가능하게 함
  },
};
</script>

<style>
/* 👉 1. 글로벌 폰트 적용 (가장 먼저 위치) */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;700&display=swap");

/* 👉 2. 전체 요소(*)에 폰트 스타일 적용 */
* {
  font-family: "IBM Plex Sans KR", sans-serif;
}

/* 👉 3. HTML과 BODY 기본 스타일 초기화 */
html,
body {
  overflow-x: hidden; /* 가로 스크롤바가 생기지 않게 막음 */
  width: 100%; /* 화면 전체 너비 사용 */
  margin-bottom: 50px; /* 하단에 여백 추가 */
}

/* 👉 4. #app ID를 가진 div에 대한 스타일 (필요시 작성) */
#app {
  /* 예를 들어 padding이나 background 설정 가능 */
}
</style>
