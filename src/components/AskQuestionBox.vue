<template>
  <v-container>
    <div class="askQ-box">
      <nuxt-link v-if="user.token" to="/AskQuestionPage">
        <div class="ask">اطرح سؤال</div>
      </nuxt-link>
      <div v-else class="ask" @click="popupToggle">اطرح سؤال</div>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    popupToggle() {
      this.$store.commit('user/popupToggle')
    },
  },
}
</script>

<style lang="scss">
.askQ-box {
  a {
    text-decoration: none;
    color: var(--v-textColor-base);
  }
  .ask {
    margin-top: 1rem;
    box-shadow: $boxShadow;
    max-width: 100%;
    border-radius: 10px;
    height: 4rem;
    padding: 1rem;
    font-size: 1rem !important;
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
