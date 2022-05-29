<template>
  <div class="addVoteComponent">
    <v-icon
      v-if="user.token"
      large
      :class="{ active: activeVote == 1 }"
      title="تصويت إيجابي"
      @click="addVote(1)"
      >arrow_drop_up</v-icon
    >
    <v-icon v-else title="تصويت إيجابي" large @click="popupToggle"
      >arrow_drop_up</v-icon
    >
    <p class="QPvotes-num">{{ votesCountState }}</p>

    <v-icon
      v-if="user.token"
      large
      :class="{ active: activeVote == -1 }"
      title="تصويت سلبي"
      @click="addVote(-1)"
      >arrow_drop_down</v-icon
    >
    <v-icon v-else large title="تصويت سلبي" @click="popupToggle"
      >arrow_drop_down</v-icon
    >
  </div>
</template>

<script>
export default {
  name: 'AddVote',
  props: {
    votesCount: {
      default: 0,
    },
    docID: {},
    vote: {
      default: 0,
    },
    collection: {
      require: true,
    },
  },
  data() {
    return {
      activeVote: this.vote,
      votesCountState: this.votesCount,
      loading: false,
    }
  },
  computed: {
    data() {
      return this.$store.state.question.question
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    popupToggle() {
      console.log('hello')
      this.$store.commit('user/popupToggle')
    },
    async addVote(vote) {
      if (vote == this.activeVote) {
        return
      }
      this.loading = true
      this.votesCountState += vote
      !this.activeVote ? (this.activeVote = +vote) : (this.activeVote = 0)
      await this.$axios
        .post(
          'votes/vote',
          {
            docID: this.docID,
            vote,
            collection: this.collection,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        )
        .catch((e) => {
          console.error(e)
        })
      this.loading = false
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
  .active {
    color: var(--v-primary-base);
  }
  .QPvotes-num {
    margin: 0;
  }
}
</style>
