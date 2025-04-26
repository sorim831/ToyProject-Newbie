<template>
  <div id="app">
    <!-- 📌 여기서 현재 경로에 맞는 컴포넌트가 표시됩니다 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
  background-image: url("@/assets/background.jpg"); /* 파일 위치에 따라 수정 */
  background-size: cover; /* 화면 꽉 채우기 */
  background-position: center; /* 가운데 정렬 */
  background-repeat: no-repeat; /* 반복 없음 */
  min-height: 100vh; /* 화면 전체 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
