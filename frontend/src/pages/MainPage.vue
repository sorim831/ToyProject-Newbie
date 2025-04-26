<template>
  <div class="main-container">
    <div class="content-box">
      <h1 class="title">대충 개쩌는 제목</h1>
      <button class="start-button">시작하기</button>
      <button class="end-button">종료</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
/* 흰색 박스 */
.content-box {
  background-color: white;
  width: 300px;
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
