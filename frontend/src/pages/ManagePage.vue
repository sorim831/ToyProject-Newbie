<template>
  <div class="manage-container">
    <h1 class="title">군인 관리 페이지</h1>

    <!-- 간부 관리 섹션 -->
    <div class="section">
      <div class="section-header" @click="toggleSection('officers')">
        <span>간부</span>
        <span>{{ officersOpen ? "▲" : "▼" }}</span>
      </div>

      <div v-if="officersOpen" class="section-content">
        <div v-for="(officer, index) in officers" :key="index" class="item">
          {{ officer.name }} / {{ officer.rank }} / 기타정보
          <button @click="editOfficer(index)">수정</button>
          <button @click="deleteOfficer(index)">삭제</button>
        </div>

        <!-- 간부 추가 폼 -->
        <div v-if="showOfficerForm" class="form">
          <input v-model="newOfficer.name" placeholder="이름" />
          <input v-model="newOfficer.rank" placeholder="계급" />
          <button @click="addOfficer">등록</button>
        </div>

        <!-- 간부 추가 버튼 -->
        <button class="add-button" @click="showOfficerForm = !showOfficerForm">
          <img src="@/assets/PlusIcon.svg" alt="추가" />
        </button>
      </div>
    </div>

    <!-- 병사 관리 섹션 -->
    <div class="section">
      <div class="section-header" @click="toggleSection('soldiers')">
        <span>일반병사</span>
        <span>{{ soldiersOpen ? "▲" : "▼" }}</span>
      </div>

      <div v-if="soldiersOpen" class="section-content">
        <!-- 병사 테이블 -->
        <table class="soldier-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>계급</th>
              <th>입대일</th>
              <th>전역일</th>
              <th>생활관</th>
              <th>비고</th>
              <th>조작</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(soldier, index) in activeSoldiers" :key="index">
              <td>{{ soldier.name }}</td>
              <td>{{ soldier.rank }}</td>
              <td>{{ soldier.enlistDate }}</td>
              <td>{{ soldier.dischargeDate }}</td>
              <td>{{ soldier.room }}</td>
              <td>{{ soldier.memo }}</td>
              <td>
                <button @click="editSoldier(index)">수정</button>
                <button @click="deleteSoldier(index, false)">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 병사 추가 폼 -->
        <div v-if="showSoldierForm" class="form">
          <input v-model="newSoldier.name" placeholder="이름" />
          <input
            v-model="newSoldier.enlistDate"
            type="date"
            @change="autoFillRankAndDischarge"
          />
          <input v-model="newSoldier.rank" placeholder="계급" readonly />
          <input
            v-model="newSoldier.dischargeDate"
            placeholder="전역날짜"
            readonly
          />
          <input v-model="newSoldier.room" placeholder="생활관" />
          <input v-model="newSoldier.memo" placeholder="비고" />
          <button @click="addSoldier">등록</button>
        </div>

        <!-- 병사 추가 버튼 -->
        <button class="add-button" @click="showSoldierForm = !showSoldierForm">
          <img src="@/assets/PlusIcon.svg" alt="추가" />
        </button>
      </div>
    </div>

    <!-- 전역자 섹션 -->
    <div class="section">
      <div class="section-header" @click="toggleSection('discharged')">
        <span>전역자</span>
        <span>{{ dischargedOpen ? "▲" : "▼" }}</span>
      </div>

      <div v-if="dischargedOpen" class="section-content">
        <!-- 전역자 테이블 -->
        <table class="soldier-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>계급</th>
              <th>입대일</th>
              <th>전역일</th>
              <th>생활관</th>
              <th>비고</th>
              <th>조작</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(soldier, index) in dischargedSoldiers" :key="index">
              <td>{{ soldier.name }}</td>
              <td>{{ soldier.rank }}</td>
              <td>{{ soldier.enlistDate }}</td>
              <td>{{ soldier.dischargeDate }}</td>
              <td>{{ soldier.room }}</td>
              <td>{{ soldier.memo }}</td>
              <td>
                <button @click="editSoldier(index)">수정</button>
                <button @click="deleteSoldier(index, true)">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "ManagePage",
  setup() {
    // 섹션 열림 상태
    const officersOpen = ref(true);
    const soldiersOpen = ref(true);
    const dischargedOpen = ref(true);

    // 데이터
    const officers = ref([]);
    const soldiers = ref([]);

    // 폼 표시 여부
    const showOfficerForm = ref(false);
    const showSoldierForm = ref(false);

    // 추가할 간부/병사 데이터
    const newOfficer = ref({ name: "", rank: "" });
    const newSoldier = ref({
      name: "",
      enlistDate: "",
      dischargeDate: "",
      rank: "",
      room: "",
      memo: "",
    });

    // 현재 복무중 병사와 전역자 분리
    const today = new Date();
    const activeSoldiers = computed(() =>
      soldiers.value.filter((s) => new Date(s.dischargeDate) > today)
    );
    const dischargedSoldiers = computed(() =>
      soldiers.value.filter((s) => new Date(s.dischargeDate) <= today)
    );

    // 섹션 열고 닫기
    const toggleSection = (section) => {
      if (section === "officers") officersOpen.value = !officersOpen.value;
      if (section === "soldiers") soldiersOpen.value = !soldiersOpen.value;
      if (section === "discharged")
        dischargedOpen.value = !dischargedOpen.value;
    };

    // 간부 추가
    const addOfficer = () => {
      officers.value.push({ ...newOfficer.value });
      newOfficer.value.name = "";
      newOfficer.value.rank = "";
      showOfficerForm.value = false;
    };

    // 병사 추가
    const addSoldier = () => {
      soldiers.value.push({ ...newSoldier.value });
      newSoldier.value = {
        name: "",
        enlistDate: "",
        dischargeDate: "",
        rank: "",
        room: "",
        memo: "",
      };
      showSoldierForm.value = false;
    };

    // 간부/병사 삭제
    const deleteOfficer = (index) => {
      officers.value.splice(index, 1);
    };
    // 병사 삭제
    const deleteSoldier = (index, isDischarged = false) => {
      if (isDischarged) {
        dischargedSoldiers.value.splice(index, 1); // 전역자 목록에서 삭제
      } else {
        soldiers.value.splice(index, 1); // 일반병사 목록에서 삭제
      }
    };

    // 수정 (미구현)
    const editOfficer = () => {
      alert("수정 기능은 추후 추가 예정입니다!");
    };
    const editSoldier = () => {
      alert("수정 기능은 추후 추가 예정입니다!");
    };

    // 입대일 입력 시 자동 계급 및 전역일 계산
    const autoFillRankAndDischarge = () => {
      const enlist = new Date(newSoldier.value.enlistDate);
      if (!isNaN(enlist)) {
        const discharge = new Date(enlist);
        discharge.setMonth(discharge.getMonth() + 18); // 18개월 복무
        newSoldier.value.dischargeDate = discharge.toISOString().slice(0, 10);

        const today = new Date();
        const months =
          (today.getFullYear() - enlist.getFullYear()) * 12 +
          (today.getMonth() - enlist.getMonth());

        if (months < 3) newSoldier.value.rank = "이병";
        else if (months < 9) newSoldier.value.rank = "일병";
        else if (months < 15) newSoldier.value.rank = "상병";
        else newSoldier.value.rank = "병장";
      }
    };

    return {
      officersOpen,
      soldiersOpen,
      dischargedOpen,
      officers,
      soldiers,
      showOfficerForm,
      showSoldierForm,
      newOfficer,
      newSoldier,
      activeSoldiers,
      dischargedSoldiers,
      toggleSection,
      addOfficer,
      addSoldier,
      deleteOfficer,
      deleteSoldier,
      editOfficer,
      editSoldier,
      autoFillRankAndDischarge,
    };
  },
};
</script>

<style scoped>
/* 전체 페이지 스타일 */
.manage-container {
  width: 400px;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
}

/* 제목 */
.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* 섹션 공통 */
.section {
  background: white;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
}

.section-header {
  background: #2e7d32;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-content {
  padding: 15px;
}

/* 아이템 공통 */
.item {
  background: #e8f5e9;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

/* 폼 스타일 */
.form {
  margin-top: 10px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
}

/* 버튼 스타일 */
button {
  padding: 8px 12px;
  margin-right: 5px;
  cursor: pointer;
}

/* 추가 버튼 */
.add-button {
  background: none;
  border: none;
  margin-top: 10px;
}

/* 병사 테이블 */
.soldier-table {
  width: 100%;
  border-collapse: collapse;
}

.soldier-table th,
.soldier-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}
</style>
