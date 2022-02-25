<template>
  <div>
    <v-btn color="primary" @click="$vuetify.theme.dark = !$vuetify.theme.dark">{{ $vuetify.theme.dark }}</v-btn>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
</style>
