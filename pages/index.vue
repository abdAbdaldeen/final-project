<template>
  <div>
    <AppHeader/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'


export default {
  name: 'IndexPage',
  components:{
    AppHeader
   
  }
}
</script>

<style lang="scss">
$fontSize: 50px;
$BGColor: #eeeeee;
h1 {
  font-size: $fontSize;
}
#sign-in {
  background-color: $BGColor;
}
</style>
