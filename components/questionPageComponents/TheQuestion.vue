<template>
  <div>
    <h1 class="QTitle">{{ data.title }}</h1>
    <div class="QBodyContainer">
      <add-vote :votesCount="data.votesCount" />
      <p class="QBody">{{ data.body }}</p>
    </div>
  </div>
</template>

<script>
import AddVote from './AddVote.vue'

export default {
  name: 'TheQuestion',
  components: { AddVote },
  computed: {
    data() {
      return this.$store.state.question.question
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
