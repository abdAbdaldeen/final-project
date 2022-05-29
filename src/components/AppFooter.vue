<template>
<v-container>
   <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>AMR</strong>
    </v-col>
  </v-footer>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-footer{
    background-color:var(--v-primary-base)!important;
    height: 5rem;
}
</style>