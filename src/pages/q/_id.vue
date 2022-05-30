<template>
  <section>
    <v-container class="TheQuestionPageContainer">
      <the-question />
      <br />
      <div v-if="data.answers" class="AnswersContainer">
        <h2>الإجابات</h2>
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
        <my-vue-editor>
          <VueEditor v-model="answer" :editorToolbar="$store.state.customToolbar"/>
        </my-vue-editor>
        <div class="text-center">
          <v-btn class="AddAnswerBtn" type="submit" color="primary" :loading="loading" :disabled="loading">
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
        store.commit('categories/setActive', r.groupID)
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
    answer: '',

    loading: false,
  }),
  computed: {
    data() {
      return this.$store.state.question.question
    },
  },
  mounted() {
    this.$store.commit('categories/setActive', this.$store.state.question.question.groupID)
  },
  beforeDestroy() {
    this.$store.commit('categories/removeActive', this.$store.state.question.question.groupID)
  },
  methods: {
    async submit() {
      if (!this.$store.state.user.token) {
        this.$store.commit('user/popupToggle')
        return;
      }
      const answer = this.answer
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
          this.answer = ""
          this.$store.commit('question/addAnswer', res.data)
          // window.location.href = window.location.pathname + `#test123`
          this.loading = false;
        } catch (error) {
          if (error.response && error.response.status == 403) {
            this.$store.commit('user/popupToggle')
          }
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
.QBody,
  .aBody {
    * {
      max-width: 100%;
    }
  }
</style>
