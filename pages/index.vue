<template>
  <v-form>
    <v-container>
      <v-row>
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
      </v-row>
    </v-container>

    <v-btn @click="$vuetify.theme.dark = true">{{ $vuetify.theme.dark }}</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss"></style>
