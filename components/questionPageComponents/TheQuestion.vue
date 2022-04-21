<template>
  <div class="TheQuestion">
    <h1 class="QTitle" dir="auto">{{ data.title }}</h1>
    <div class="QBodyContainer">
      <add-vote
        :votesCount="data.votesCount"
        :docID="$route.params.id"
        :vote="data.qvote"
        collection="questions"
      />
      <p class="QBody" v-html="data.body"></p>
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
.TheQuestion {
  .QBodyContainer {
    display: flex;
    gap: 0.5rem;
    flex-direction: row-reverse;
  }
  .QBody {
    flex: auto;
  }
  .QTitle{
    text-align: initial;
    padding: 1rem 0px;
  }
}
</style>
