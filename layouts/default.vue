<template>
  <v-app>
    <AppHeader />
    <Nuxt />
    <SignInFormDialog />
  </v-app>
</template>
<script>
export default {
  async fetch() {
    await this.$axios.$get('groups/get').then((res) => {
      this.$store.commit('categories/add', res)
    })
  },
}
</script>
<style></style>
