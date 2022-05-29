<template>
  <v-dialog v-model="dialogValue" class="FDialog">
    <v-card class="FCard">
      <SignInForm v-if="isLogInForm" :setIsLogInForm="setIsLogInForm" />
      <SignUpForm v-else :setIsLogInForm="setIsLogInForm" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isLogInForm: true,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    dialogValue: {
      get() {
        return this.$store.state.user.dialog
      },
      set() {
        this.$store.commit('user/popupToggle')
      },
    },
  },
  methods: {
    setIsLogInForm(value) {
      this.isLogInForm = value
    },
  },
}
</script>

<style lang="scss" scope>
.v-dialog {
  max-width: 25rem;
  border-radius: 10px !important;
}
.FPform {
  border-radius: 20px;
  .row {
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: auto;
    padding: 2rem;
    max-width: 25rem;

    p {
      color: var(--v-primary-base);
    }
    #input {
      padding: 0.2rem;
      max-width: 20rem;
    }
    .buttons {
      width: 100%;
      padding: 0.7rem;
      display: flex;
      max-width: 25rem;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
