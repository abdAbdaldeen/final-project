<template>
  <v-form class="form" @submit.prevent="submit" ref="form">
    <v-row class="sign-in">
      <h1>إنشاء حساب</h1>
      <br />
      <p>
        أهلا بك في مبرمجون <br />انضم لمجتمع المبرمجين العرب و ابدأ مغامرتك
        الخاصة
      </p>
      <v-col class="input">
        <v-text-field
          class="tf"
          v-model="name"
          :counter="10"
          label="الاسم"
          :rules="nameRules"
          required
          outlined
        ></v-text-field>
      </v-col>

      <v-col class="input">
        <v-text-field
          class="tf"
          v-model="email"
          label="البريد الإلكتروني"
          required
          :rules="emailRules"
          outlined
        ></v-text-field>
      </v-col>

      <v-col class="input">
        <v-text-field
          class="tf"
          v-model="password"
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
        <nuxt-link to="/l/تسجيل-الدخول">
          <div>لديك حساب؟</div>
        </nuxt-link>
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
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'الاسم مطلوب',
      (v) =>
        (v && v.length >= '10' && 'Name must be less than 10 characters') ||
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
      min: (v) => (v && v.length >= 8) || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },

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
          this.$router.push('/')
        } catch (error) {
          console.error(error)
          this.loading = false
        }
      }
    },
  },
}
</script>
