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
  head() {
    const { englishSiteName, twitterId } = this.$store.state;
    return {
      title: this.data.title + " - " + this.$store.state.arabicSiteName,
      meta: [
        { name: "keywords", content: this.data.keywords },
        { name: "description", content: this.data.metaDescription },
        { name: "format-detection", content: "telephone=no" },
        { name: "application-name", content: this.$store.state.arabicSiteName },
        {
          name: "twitter:image",
          content: this.data.thumbnail
            ? this.data.thumbnail
            : this.$store.state.defaultImage380x285,
        },
        {
          name: "thumbnail",
          content: this.data.thumbnail
            ? this.data.thumbnail
            : this.$store.state.defaultImage380x285,
        },
        { name: "twitter:card", content: "summary_large_image" },
        // eslint-disable-next-line no-unneeded-ternary
        { name: "twitter:site", content: `@${twitterId ? twitterId : englishSiteName}` },
        {
          name: "twitter:image:src",
          content: this.data.thumbnail
            ? this.data.thumbnail
            : this.$store.state.defaultImage380x285,
        },
        {
          name: "twitter:title",
          content: this.data.title + " - " + this.$store.state.arabicSiteName,
        },
        { name: "twitter:description", content: this.data.metaDescription },
        {
          property: "og:image",
          content: this.data.thumbnail
            ? this.data.thumbnail
            : this.$store.state.defaultImage380x285,
        },
        {
          property: "og:title",
          content: this.data.title + " - " + this.$store.state.arabicSiteName,
        },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content:
            ( this.$store.state.siteUrl.slice(-1) == '/' ? this.$store.state.siteUrl.slice(0, -1) : this.$store.state.siteUrl  ) +
            this.$route.fullPath,
        },
        { property: "og:description", content: this.data.metaDescription },
        { property: "site_name", content: this.$store.state.arabicSiteName },
        {
          itemprop: "name",
          content: this.data.title + " - " + this.$store.state.arabicSiteName,
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            ( this.$store.state.siteUrl.slice(-1) == '/' ? this.$store.state.siteUrl.slice(0, -1) : this.$store.state.siteUrl  ) +
            this.$route.fullPath,
        },
      ],
    };
  },
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
