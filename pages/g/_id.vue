<template>
  <!-- <v-container class="CategoryPageContainer"> -->
    <!-- <CategoryDescription /> -->
    <QuestionList />
  <!-- </v-container> -->
</template>

<script>
import QuestionList from '~/components/common/QuestionList.vue'
export default {
  components: { QuestionList },
  async asyncData({ $axios, store, error, redirect, route }) {
    return await $axios
      .$get('questions/getFirst/' + route.params.id)
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

<style></style>
