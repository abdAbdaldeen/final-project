<template>
  <v-form>
    <v-container>
      <v-row id="sign-in">
        <h1>Sign in form</h1>
        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            label="الاسم الاول"
            required
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
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'FormPage',
}
</script>

<style  lang="scss" scoped>
$fontSize: 30px;
$BGColor: #eeeeee;
h1 {
  font-size: $fontSize;
}
#sign-in {
  background-color: $BGColor;
}
</style>
