<template>
  <div>
    <AskQuestionBox />
    <QuestionBox v-for="question in questions" :key="question.qID" :data="question" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios, store, error, redirect }) {
    return await $axios
      .$get('questions/getAllFirst')
      .then((r) => {
        const questions = r.questions
        const lastKey = r.lastKey
        return { questions, lastKey }
      })
      .catch((e) => {
        console.error(e)
        // error({ statusCode: 404, message: 'Post not found' });
      })
  },
}
</script>

<style lang="scss"></style>
