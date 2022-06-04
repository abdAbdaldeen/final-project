<template>
  <v-form ref="form" class="FPform" @submit.prevent="submit">
    <v-row class="sign-in">
      <h1>إنشاء حساب</h1>
      <br />
      <p class="text-center">
        أهلا بك في مبرمجون <br />انضم لمجتمع المبرمجين العرب و ابدأ مغامرتك
        الخاصة
      </p>
      <v-col>
        <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
      </v-col>
      <v-col class="input">
        <v-text-field
          v-model="name"
          class="tf"
          :counter="50"
          label="الاسم"
          :rules="nameRules"
          required
          outlined
        ></v-text-field>
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
          :rules="[passwordRules.required, passwordRules.min,passwordRules.validationPass]"
          :type="show ? 'text' : 'password'"
          outlined
          counter
          @click:append="show = !show"
        ></v-text-field>
      </v-col>
      <div class="buttons">
        <nuxt-link v-if="!setIsLogInForm" to="/l/تسجيل-الدخول">
          <div>لديك حساب؟</div>
        </nuxt-link>
        <v-btn v-else outlined color="primary" @click="setIsLogInForm(true)"
          >تسجيل الدخول</v-btn
        >

        <v-btn
          color="primary"
          type="submit"
          :loading="loading"
          :disabled="loading"
          >انشاء حساب</v-btn
        >
      </div>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'SignUpForm',
  props: {
    setIsLogInForm: {
      type: Function,
    },
  },
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'الاسم مطلوب',
      (v) =>
        (v && v.length >= '50' && 'الاسم يجب ان يكون اقل من 50 حرف ') ||
        true,
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'البريد الإلكتروني مطلوب',
      (v) => /.+@.+/.test(v) || 'يجب ان يكون البريد الاكتروني صحيح',
    ],
    password: '',
    show: false,
    passwordRules: {
      required: (value) => !!value || 'كلمة المرور مطلوبة',
      min: (v) => (v && v.length >= 8) || '8 حروف على الاقل',
      validationPass :(v) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v) || "كلمة المرور يجب ان تحتوي 8 خانات على الاقل ،حرف واحد على الاقل، رقم واحد على الاقل ورمز خاص واحد على الاقل." ,

    },
    errorMsg: '',
    loading: false,
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          const res = await this.$axios.post('users/signup', {
            name: this.name,
            email: this.email,
            password: this.password,
            confirmPassword: this.password,
          })
          localStorage.setItem('authToken', res.data.token)
          this.$store.commit('user/login', res.data)
          this.$cookies.set('authToken', res.data.token, {
            path: '/',
            maxAge: 60 * 60
          })
          
          this.loading = false;
          if (!this.setIsLogInForm) {
            this.$router.push('/')
          }else{
            this.$store.commit('user/popupToggle')
          }
        } catch (error) {
          const msg =
            error &&
            error.response &&
            error.response.data &&
            error.response.data.error
          this.errorMsg =
            msg || 'عذرا لقد حدث خطأ غير معروف، يرجى المحاولة مرة أخرى'
          this.loading = false
        }
      }
    },
  },
}
</script>
