<template>
  <div class="film">
    <div v-if="films.Error!='Movie not found!'">
      <img :src="films.Poster" />
      <p>
        <b>Name:</b>
        {{films.Title}}
      </p>
      <p>
        <b>IMDB Score:</b>
        {{films.imdbRating}}
      </p>
      <p>
        <b>Director:</b>
        {{films.Director}}
      </p>
      <p>
        <b>Actors:</b>
        {{films.Actors}}
      </p>
      <p>
        <b>Language:</b>
        {{films.Language}}
      </p>
      <p>
        <b>Description:</b>
        {{films.Plot}}
      </p>
    </div>
    <div v-bind="films" v-if="films.Error=='Movie not found!'">
      <p>{{films.Error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["films"]
};
</script>

<style scoped>
.film img {
  float: left;
  margin-right: 40px;
}
.film p {
  margin-top: 23px;
}
</style>
