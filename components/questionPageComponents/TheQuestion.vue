<template>
  <div>
    <h1 class="QTitle">{{ data.title }}</h1>
    <div class="QBodyContainer">
      <add-vote />
      <p class="QBody">{{ data.body }}</p>
    </div>
  </div>
</template>

<script>
import AddVote from './AddVote.vue'

export default {
  name: 'TheQuestion',
  components: { AddVote },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: 'ما هو الفرق بين Methods و Computed في Vue',
          votesNum: 0,
          body: 'ما هو الفرق الرئيسي بين methods and a computed value في Vue.js? انها تبدو متشابهة وقابلة للتبديل',
          category: 'vue',
        }
      },
    },
  },
}
</script>

<style lang="scss">
.QBodyContainer {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  .QBody {
  }
}
</style>
