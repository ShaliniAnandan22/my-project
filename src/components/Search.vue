<template>
  <div class="search">
    <input type="text" placeholder="Enter Film Name" v-model="query" @keypress.enter="search" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      if (this.query == "") {
        alert("Please enter film title for searching...");
      } else {
        this.$emit("SearchRequested", this.query);
      }
    }
  }
};
</script>

<style scoped>
.search input {
  padding: 10px;
  width: 400px;
  border-radius: 10px;
}
.search button {
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  color: black;
  background-color: #9b9ce0;
}
</style>
