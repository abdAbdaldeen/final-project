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
        <client-only>
          <VueEditor v-model="answer" :editorToolbar="customToolbar" />
        </client-only>
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
export default {
  components: { TheQuestion, AnswerBox },
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
    answer: '',
    answerRules: [(v) => !!v || 'الاجابة مطلوبة'],

    loading: false,

    customToolbar: [
      [{ header: [false, 2, 3, 4, 5, 6] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      [{ align: '' }, { align: 'center' }, { align: 'right' }],
      ['code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ['link', 'image'],
      ['clean'], // remove formatting button
    ],
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

// ===================
.theme--dark.v-application {
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow .ql-toolbar button,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow.ql-toolbar .ql-picker-item,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow.ql-toolbar button {
    color: #fff;
  }
  .quillWrapper .ql-snow .ql-stroke {
    stroke: #fff;
  }
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: #fff;
  }
  .ql-snow .ql-picker-options {
    background-color: var(--v-background-base);
  }
  .ql-active {
    color: var(--v-primary-base) !important;
  }
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter {
    stroke: var(--v-primary-base);
  }
}

.ql-align-right {
  text-align: right;
}
.ql-align-center {
  text-align: center;
}
pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>
