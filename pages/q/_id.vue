<template>
  <section>
    <v-container class="TheQuestionPageContainer">
      <the-question />
      <br />
      <div v-if="data.answers" class="AnswersContainer">
        <h2 id="test123">الإجابات</h2>
        <answer-box
          v-for="answer in data.answers"
          :key="answer.aID"
          :data="answer"
        />
      </div>
      <v-form ref="form" class="AddAnswerForm" @submit.prevent="submit">
        <!-- <v-textarea
          v-model="answer"
          outlined
          name="input-7-4"
          label="اضف اجابتك"
          :rules="answerRules"
          required
        ></v-textarea> -->
        <my-vue-editor/>
        <div class="text-right">
          <v-btn class="AddAnswerBtn" type="submit" color="primary">
            نشر
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </section>
</template>

<script>
import TheQuestion from '~/components/questionPageComponents/TheQuestion.vue'
import AnswerBox from '~/components/questionPageComponents/AnswerBox.vue'
import MyVueEditor from '~/components/common/MyVueEditor.vue'
export default {
  components: { TheQuestion, AnswerBox, MyVueEditor },
  async asyncData({ $axios, store, error, redirect, route }) {
    return await $axios
      .$get('questions/getOne/' + encodeURIComponent(route.params.id), {
        headers: {
          authorization: store.state.user.token
            ? `Bearer ${store.state.user.token}`
            : '',
        },
      })
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
      const answer = this.$store.state.primary.inputV
      if (answer) {
        try {
          this.loading = true
          const res = await this.$axios.post(
            'answers/add',
            {
              body: answer,
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
          // window.location.href = window.location.pathname + `#test123`
          window.location.reload(true)
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
  direction: ltr;
  text-align: left;
  .AnswersContainer {
    > h2 {
      text-align: right;
    }
  }
  .AddAnswerBtn {
    width: 7rem;
    margin-top: 1rem;
  }
}
</style>
