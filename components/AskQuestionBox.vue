<template>
  <v-container>
    <div class="askQ-box">
      <nuxt-link to="/AskQuestionPage">
        <div class="ask">اطرح سؤال</div>
      </nuxt-link>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss">
.askQ-box {
  a {
    text-decoration: none;
  }
  .ask {
    margin-top: 1rem;
    //background-color: var(--v-qBoxBg-base);
    box-shadow: 3px 3px 5px var(--v-secondary-lighten5);
    max-width: 100%;
    border-radius: 10px;
    height: 4rem;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    .ask {
      font-size: 0.7rem;
      padding: 0.5rem;
      height: 3rem;
    }
  }
}
</style>
