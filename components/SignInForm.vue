<template>
  <v-form ref="form" class="FPform" @submit.prevent="submit">
    <v-row class="sign-in">
      <h1>تسجيل الدخول</h1>
      <br />
      <v-col>
        <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
      </v-col>
      <v-col class="input">
        <v-text-field
          v-model="email"
          class="tf"
          label="البريد الإلكتروني"
          required
          :rules="emailRules"
          outlined
        ></v-text-field>
      </v-col>

      <v-col class="input">
        <v-text-field
          v-model="password"
          class="tf"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          label="كلمة المرور"
          hint="8 حروف على الاقل "
          required
          :rules="[passwordRules.required, passwordRules.min]"
          :type="show ? 'text' : 'password'"
          outlined
          counter
          @click:append="show = !show"
        ></v-text-field>
      </v-col>
      <div class="buttons">
        <nuxt-link v-if="!setIsLogInForm" to="/l/انشاء-حساب">
          <div>إنشاء حساب</div>
        </nuxt-link>
        <v-btn v-else outlined color="primary" @click="setIsLogInForm(false)"
          >إنشاء حساب</v-btn
        >
        <v-btn
          color="primary"
          type="submit"
          :loading="loading"
          :disabled="loading"
          >تسجيل الدخول</v-btn
        >
      </div>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'SignInForm',
  props: {
    setIsLogInForm: {
      type: Function,
    },
  },
  data: () => ({
    valid: false,

    email: '',
    emailRules: [
      (v) => !!v || 'البريد الإلكتروني مطلوب',
      (v) => /.+@.+/.test(v) || 'يجب ان يكون البريد الاكتروني صحيح',
    ],
    password: '',
    show: false,
    passwordRules: {
      required: (value) => !!value || 'كلمة المرور مطلوبة',
      min: (v) => (v && v.length >= 8) || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },
    errorMsg: '',
    loading: false,
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          const res = await this.$axios.post('users/login', {
            email: this.email,
            password: this.password,
          })
          localStorage.setItem('authToken', res.data.token)
          this.$store.commit('user/login', res.data)
          this.loading = false;
          if (!this.setIsLogInForm) {
            this.$router.push('/')
          }else{
            this.$store.commit('user/popupToggle')
          }
        } catch (error) {
          const msg =
            error.response && error.response.data && error.response.data.error
          this.errorMsg =
            msg || 'عذرا لقد حدث خطأ غير معروف، يرجى المحاولة مرة أخرى'
          this.loading = false
        }
      }
    },
  },
}
</script>

<style></style>
