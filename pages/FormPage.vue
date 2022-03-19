<template>
  <v-container>
    <v-form class="form">
      <v-row id="sign-in">
        <h1>Sign in form</h1>
        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            label="الاسم الاول"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            label="اسم الاخير"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="البريد الالكتروني" required></v-text-field>
        </v-col>
        <v-btn @click="$vuetify.theme.dark = true">{{
          $vuetify.theme.dark
        }}</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'FormPage',
}
</script>

<style lang="scss" scoped>
.form {
  $fontSize: 30px;
  $BGColor: #eeeeee;
  h1 {
    font-size: $fontSize;
  }
  #sign-in {
    background-color: $BGColor;
  }
  html {
    height: 100%;
  }

  #sign-in {
    margin-top: 5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /*@media (max-width: 800px) {
  #sign-in {
    flex-direction: column;
    align-items: center;
  }
}*/
}
</style>
