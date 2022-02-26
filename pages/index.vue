<template>
  <div>
    <v-btn color="primary" @click="$vuetify.theme.dark = !$vuetify.theme.dark">{{ $vuetify.theme.dark }}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  components: {
    
  },
}
</script>

<style lang="scss">
</style>
