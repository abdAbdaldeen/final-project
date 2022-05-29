<template>
  <div id="QuestionList">
    <QuestionBox
      v-for="question in data.questions"
      :key="question.qID"
      :data="question"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      element: null,
      firstLoadLength: 6,
      loading: false,
      stop: false,
    }
  },
  computed: {
    data() {
      return this.$store.state.questions.data
    },
  },
  mounted() {
    if (this.data.questions.length == this.firstLoadLength) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async handleScroll(event) {
      if (this.loading || this.stop) {
        return
      }
      if (!this.element) {
        const questions = document.getElementById('QuestionList').children
        if (questions.length >= this.firstLoadLength) {
          this.element = questions[questions.length - 3]
        } else {
          this.stop = true
          return
        }
      }
      if (this.isInViewport(this.element)) {
        this.element = null
        await this.loadMore()
      }
    },
    isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    async loadMore() {
      this.loading = true
      const cat = this.$route.params.id
      const url = `questions/${cat ? 'getMore' : 'getAllMore'}`
      await this.$axios
        .post(url, {
          groupID: cat,
          key: this.data.lastKey,
        })
        .then((res) => {
          const questions = res.data.questions
          const lastKey = res.data.lastKey
          this.$store.commit('questions/loadMore', { questions, lastKey })
          this.loading = false
          if (!questions || questions.length < this.firstLoadLength) {
            this.stop = true
          }
        })
    },
  },
}
</script>
<style></style>
