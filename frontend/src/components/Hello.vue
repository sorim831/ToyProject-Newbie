<template>
  <div>{{ message }}</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/api/hello")
      .then((res) => {
        this.message = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
