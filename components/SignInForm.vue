<template>
  <v-form class="form">
    <v-row class="sign-in">
      <h1>تسجيل الدخول</h1>
      <br />

      <v-col id="input">
        <v-text-field
          label="البريد الإلكتروني"
          required
          :rules="emailRules"
          outlined
        ></v-text-field>
      </v-col>

      <v-col id="input">
        <v-text-field
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
        <nuxt-link to="/l/انشاء-حساب">
          <div>إنشاء حساب</div>
        </nuxt-link>
        <v-btn color="primary">تسجيل الدخول</v-btn>
      </div>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'SignInForm',
  data: () => ({
    valid: false,

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
  }),
}
</script>

<style></style>
