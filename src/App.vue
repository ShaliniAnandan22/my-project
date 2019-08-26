<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App"></hello-world>-->
    <Search @SearchRequested="searchingFilm"></Search>
    <div v-if="films">
      <Film :films="films"></Film>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Search from "./components/Search";
import Film from "./components/Film";

export default {
  name: "app",
  components: {
    // HelloWorld
    Search,
    Film
  },
  created() {
    searchingFilm("Fast");
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      films: null
    };
  },
  methods: {
    searchingFilm(query) {
      this.films = [];
      fetch("https://www.omdbapi.com/?apikey=4f0d0cd0&t=" + query)
        .then(res => res.json())
        .then(res => {
          this.films = res;
        });
    }
  }
};
</script>
