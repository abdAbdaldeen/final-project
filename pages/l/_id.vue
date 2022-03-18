<template>
  <v-container>
    <div>
      <div v-if="$route.params.id == 'انشاء-حساب'">
        <Sign-up-Form />
      </div>
      <div v-else-if="$route.params.id == 'تسجيل-الدخول'">
        <SignInForm />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          valid: true,
          name: '',
          nameRules: [
            (v) => !!v || 'الاسم مطلوب',
            (v) =>
              (v &&
                v.length >= '10' &&
                'Name must be less than 10 characters') ||
              true,
          ],
          email: '',
          emailRules: [
            (v) => !!v || 'البريد الإلكتروني مطلوب',
            (v) => /.+@.+/.test(v) || 'يجب ان يكون البريد الاكتروني صحيح',
          ],
          password: 'Password',
          show: false,
          passwordRules: {
            required: (value) => !!value || 'كلمة المرور مطلوبة',
            min: (v) => (v && v.length >= 8) || 'Min 8 characters',
            emailMatch: () => `The email and password you entered don't match`,
          },
        }
      },
    },
  },
}
</script>

<style lang="scss">
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  max-width: 25rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px var(--v-secondary-lighten5);
  .sign-in {
    padding: 1rem;
    text-align: center;
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
