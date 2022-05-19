<template>
  <div>
    <AskQuestionBox />
    <QuestionList />
  </div>
</template>

<script>
import QuestionList from '~/components/common/QuestionList.vue'
export default {
  components: { QuestionList },
  name: 'IndexPage',
  async asyncData({ $axios, store, error, redirect }) {
    return await $axios
      .$get('questions/get')
      .then((r) => {
        const questions = r.questions
        const lastKey = r.lastKey
        store.commit('questions/add', { questions, lastKey })
      })
      .catch((e) => {
        console.error(e)
        // error({ statusCode: 404, message: 'Post not found' });
      })
  },
}
</script>

<style lang="scss"></style>
