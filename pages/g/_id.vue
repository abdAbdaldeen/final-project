<template>
  <v-container class="CategoryPageContainer">
    <!-- <CategoryDescription /> -->
    <QuestionBox v-for="question in questions" :key="question.qID" :data="question" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, store, error, redirect,route }) {
    return await $axios
      .$get('questions/getFirst/'+route.params.id)
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

<style></style>
