<template>
<!-- <v-container class="LandingPageCon"> -->
    <div>
       <v-parallax src="25332.jpg">
      <div class="d1">
          <h1>اسأل.</h1>
          <h1>أجِب.</h1>
          <h1>تحدَّى.</h1>
          <h1>تعلَّم.</h1>
          <br>
          <v-btn color="primary">انضم لنا</v-btn>
      </div>
       </v-parallax>
       <div class="d1">
          <h1>اسأل.</h1>
          <h1>أجِب.</h1>
          <h1>تحدَّى.</h1>
          <h1>تعلَّم.</h1>
          <br>
          <v-btn color="primary">انضم لنا</v-btn>
      </div>
       </div>
       
  <!-- </v-container> -->
</template>

<script>
export default {

}
</script>

<style lang="scss">

.d1{
    height: 100vh;
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
}
@media (max-width: 768px) {
    .d1{
        font-size: 1rem;
    }
}

</style>