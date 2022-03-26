<template>
  <section>
    <v-container class="TheQuestionPageContainer">
      <the-question/>
      <br />
      <div class="AnswersContainer" v-if="data.answers">
        <h1>الإجابات</h1>
        <answer-box v-for="answer in data.answers" :key="answer.aID" :data="answer"/>
      </div>
      <v-form class="AddAnswerForm" @submit.prevent="submit">
        <v-textarea outlined name="input-7-4" label="اضف اجابتك" v-model="answer"></v-textarea>
        <v-btn class="AddAnswerBtn" type="submit" color="primary"> نشر </v-btn>
      </v-form>
    </v-container>
  </section>
</template>

<script>
import TheQuestion from '~/components/questionPageComponents/TheQuestion.vue'
import AnswerBox from '~/components/questionPageComponents/AnswerBox.vue'
export default {
  components: { TheQuestion, AnswerBox },
  async asyncData({ $axios, store, error, redirect, route }) {
    return await $axios
      .$get('questions/getOne/'+encodeURIComponent(route.params.id))
      .then((r) => {
        return store.commit("question/add", r);
      })
      .catch((e) => {
        console.error(e)
        // error({ statusCode: 404, message: 'Post not found' });
      })
  },
  data: () => ({
    answer: "",
    loading: false,
  }),
  computed: {
    data() {
      return this.$store.state.question.question
    },
  },
  methods: {
    async submit() {
      try {
        this.loading = true
        const res = await this.$axios.post('answers/add', {
          body: this.answer,
          qID: this.$route.params.id,
        },{
            headers: {
              authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
            params: {
              getUserData: 1,
            }
          })
        console.log(res)
        // this.loading = false;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
.TheQuestionPageContainer {
  .AddAnswerForm {
    text-align: center;
  }
  .AddAnswerBtn {
    width: 7rem;
  }
}
</style>
