<template>
  <div class="main-container">
    <div class="content-box">
      <h1 class="title">뉴비</h1>
      <button class="start-button" @click="goToManagePage">시작하기</button>
      <button class="end-button" @click="closeWindow">종료</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"; // 라우터 사용

export default {
  name: "MainPage",
  setup() {
    const router = useRouter();

    // 시작하기 버튼 클릭 시 ManagePage로 이동
    const goToManagePage = () => {
      router.push("/manage");
    };

    // 종료 버튼 클릭 시 창 닫기
    const closeWindow = () => {
      window.close();
    };

    return {
      goToManagePage,
      closeWindow,
    };
  },
};
</script>

<style scoped>
/* 흰색 박스 */
.content-box {
  background-color: white;
  width: 400px;
  height: 500px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

/* 제목 스타일 */
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
}

/* 버튼 공통 스타일 */
.start-button,
.end-button {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
}

/* 시작하기 버튼 스타일 */
.start-button {
  background-color: #2e7d32; /* 진한 초록색 */
}

/* 종료 버튼 스타일 */
.end-button {
  background-color: #33691e; /* 더 진한 초록색 */
}
</style>
