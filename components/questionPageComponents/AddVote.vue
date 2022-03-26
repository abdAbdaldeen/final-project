<template>
  <div class="addVoteComponent">
    <v-icon class="voteIcon" large>arrow_drop_up</v-icon>
    <p class="QPvotes-num">{{ votesCount }}</p>
    <v-icon class="voteIcon" large>arrow_drop_down</v-icon>
  </div>
</template>

<script>
export default {
  name: 'AddVote',
  props: {
    votesCount: {
      default: 0,
    },
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
