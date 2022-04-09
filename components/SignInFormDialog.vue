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

<style lang="scss">
.row {
  flex-direction: column;
}
.FDialog {
  flex: 1;
  display: flex;
  align-items: center;
}
.FPform {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  max-width: 25rem;
  border-radius: 10px;
  box-shadow: $boxShadow;
  .sign-in {
    padding: 1rem;
    // text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  #input {
    padding: 0.2rem;
    max-width: 20rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;
  }
  p {
    color: var(--v-primary-base);
  }
}
</style>
