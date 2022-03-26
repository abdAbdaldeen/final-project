<template>
  <v-app>
    <AppHeader/>
    <Nuxt />
  </v-app>
</template>
<script>
export default {
  async fetch() {
    await this.$axios.$get("groups/get")
    .then((res)=>{
      this.$store.commit("categories/add", res);
    })
  },
  created(){
    // if (process.client) {
    //   let authToken = localStorage.getItem('authToken')
    //   if (authToken) {
    //     this.$store.commit("categories/add", res)
    //   }
    // }
  }
};
</script>
<style>
</style>