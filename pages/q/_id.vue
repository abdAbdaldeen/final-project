<template>
  <section>
    <v-container class="TheQuestionPageContainer">
      <the-question />
      <br />
      <div v-if="data.answers" class="AnswersContainer">
        <h1>الإجابات</h1>
        <answer-box
          v-for="answer in data.answers"
          :key="answer.aID"
          :data="answer"
        />
      </div>
      <v-form ref="form" class="AddAnswerForm" @submit.prevent="submit">
        <v-textarea
          v-model="answer"
          outlined
          name="input-7-4"
          label="اضف اجابتك"
          :rules="answerRules"
          required
        ></v-textarea>
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
      .$get('questions/getOne/' + encodeURIComponent(route.params.id))
      .then((r) => {
        return store.commit('question/add', r)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        // error({ statusCode: 404, message: 'Post not found' });
      })
  },

  data: () => ({
    answer: '',
    answerRules: [(v) => !!v || 'الاجابة مطلوبة'],

    loading: false,
  }),
  computed: {
    data() {
      return this.$store.state.question.question
    },
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          const res = await this.$axios.post(
            'answers/add',
            {
              body: this.answer,
              qID: this.$route.params.id,
            },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`,
              },
              params: {
                getUserData: 1,
              },
            }
          )
          // eslint-disable-next-line no-console
          console.log(res)
          // this.loading = false;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
          this.loading = false
        }
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
