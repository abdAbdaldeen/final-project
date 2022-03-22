<template>
  <div class="addVoteComponent">
    <v-icon class="voteIcon" large @click="votesNum++">arrow_drop_up</v-icon>
    <p class="QPvotes-num">{{ votesNum }}</p>
    <v-icon class="voteIcon" large @click="votesNum--">arrow_drop_down</v-icon>
  </div>
</template>

<script>
export default {
  name: 'AddVote',
  data() {
    return {
      votesNum: 100,
    }
  },
}
</script>

<style lang="scss">
.addVoteComponent {
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0.7;
  .voteIcon {
  }
  .QPvotes-num {
    margin: 0;
  }
}
</style>
