<template>
  <v-app>
    <AppHeader />
    <Nuxt />
  </v-app>
</template>
<script>
export default {
  async fetch() {
    await this.$axios.$get('groups/get').then((res) => {
      this.$store.commit('categories/add', res)
    })
  },
  async created() {
    if (process.client) {
      const token = localStorage.getItem('authToken')
      if (token) {
        await this.$axios
          .$get('users/get', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const data = {
              token,
              email: res.email,
              displayName: res.displayName,
              photoURL: res.photoURL,
            }
            this.$store.commit('user/login', data)
          })
          .catch((e) => {
            console.error(e)
          })
      }
    }
  },
}
</script>
<style></style>
