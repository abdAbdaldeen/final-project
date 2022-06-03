<template>
  <v-container class="AQpageContainer">
    <v-form ref="form" class="AQform" @submit.prevent="submit">
      <v-text-field
        v-model="title"
        :rules="titleRules"
        required
        label=" عنوان السؤال"
        outlined
      ></v-text-field>
      <!-- <v-textarea
        v-model="body"
        :rules="bodyRules"
        required
        outlined
        name="input-7-4"
        label="نص السؤال"
      ></v-textarea> -->
      <div class="my-vue-editor">
        <my-vue-editor>
          <VueEditor
            v-model="body"
            :editorToolbar="$store.state.customToolbar"
          />
        </my-vue-editor>
      </div>
      <v-autocomplete
        class="category"
        v-model="groupID"
        :rules="groupRules"
        :items="categories"
        required
        item-text="name"
        label="اختر التصنيف"
        outlined
        dense
        clearable
      ></v-autocomplete>
      <v-btn
        class="btn"
        type="submit"
        color="primary"
        :loading="loading"
        :disabled="loading"
      >
        نشر
      </v-btn>
    </v-form>
    <!-- ============== -->
    <v-dialog v-model="error" persistent>
      <v-card class="errorCard">
        <h2>عُذراً</h2>
        <p class="msg">{{ errorMsg }}</p>
        <p>{{ errorTip }}</p>
        <v-btn
          v-if="btnText == 'حسناً'"
          color="primary"
          class="errBtn"
          @click="error = false"
        >
          {{ btnText }}
        </v-btn>
        <div class="btnContainer">
          <v-btn
            v-if="btnText == 'إغلاق'"
            :to="qUrl"
            color="primary"
            class="errBtn"
            @click="error = false"
          >
            {{ goToQuestion }}
          </v-btn>
          <v-btn
            v-if="btnText == 'إغلاق'"
            outlined
            color="primary"
            class="errBtn"
            @click="error = false"
          >
            {{ btnText }}
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import MyVueEditor from '~/components/common/MyVueEditor.vue'
export default {
  name: 'AskQuestionPage',
  components: { MyVueEditor },
  head() {
    const { englishSiteName, twitterId, arabicSiteName, defaultImage380x285 } = this.$store.state;
    const pName = this.$route.name.replace(/-/g," ")
    const gDisc = `${pName}, ${englishSiteName} - ${arabicSiteName}`
    return {
      title: pName + " - " + arabicSiteName,
      meta: [
        { name: "keywords", content: pName },
        { name: "description", content: gDisc },
        { name: "format-detection", content: "telephone=no" },
        { name: "application-name", content: arabicSiteName },
        {
          name: "twitter:image",
          content: defaultImage380x285,
        },
        {
          name: "thumbnail",
          content: defaultImage380x285,
        },
        { name: "twitter:card", content: "summary_large_image" },
        // eslint-disable-next-line no-unneeded-ternary
        { name: "twitter:site", content: `@${twitterId ? twitterId : englishSiteName}` },
        {
          name: "twitter:image:src",
          content: defaultImage380x285,
        },
        {
          name: "twitter:title",
          content: pName + " - " + arabicSiteName,
        },
        { name: "twitter:description", content: gDisc },
        {
          property: "og:image",
          content: defaultImage380x285,
        },
        {
          property: "og:title",
          content: pName + " - " + arabicSiteName,
        },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content:
            ( this.$store.state.siteUrl.slice(-1) == '/' ? this.$store.state.siteUrl.slice(0, -1) : this.$store.state.siteUrl  ) +
            this.$route.fullPath,
        },
        { property: "og:description", content: gDisc },
        { property: "site_name", content: arabicSiteName },
        {
          itemprop: "name",
          content: pName + " - " + arabicSiteName,
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
  data: () => ({
    dialog: false,
    title: '',
    titleRules: [
      (v) => !!v || 'العنوان مطلوب',
      (v) =>
        (v && v.length >= '50' && 'العنوان يجب ان يكون اقل من 50 حرف') || true,
    ],
    body: '',
    bodyRules: [(v) => !!v || 'السؤال مطلوب'],
    groupID: '',
    groupRules: [(v) => !!v || 'التصنيف مطلوب'],

    error: false,
    errorMsg: '',
    errorTip: '',
    btnText: '',
    goToQuestion: '',
    qUrl: '',
    loading: false,
  }),
  computed: {
    categories() {
      const objCat = this.$store.state.categories.categories

      const arrayCat = Object.keys(objCat).map(function (key) {
        return objCat[key]
      })
      return arrayCat
    },
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate() && this.body) {
        try {
          this.loading = true
          const res = await this.$axios.post(
            'questions/add',
            {
              title: this.title,
              body: this.body,
              groupID: this.groupID.replace(/ /g, '-'),
            },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`,
              },
            }
          )
          // eslint-disable-next-line no-console
          this.$router.push('/q/' + res.data.qID)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
          if (error.response) {
            if (error.response.status == 403) {
              // not logged in
              this.$store.commit('user/popupToggle')
            }
            if (error.response.status == 405) {
              // عملاتك لا تكفي لاضافة سؤال
              this.error = true
              this.errorMsg = error.response.data.error
              this.errorTip =
                'لتقوم بجمع العملات عليك الاجابة على بعض الاسئلة بطريقة صحيحة والحصول على تصويتات ايجابية'
              this.btnText = 'حسناً'
              this.goToQuestion = ''
              this.qUrl = ''
            } else if (error.response.status == 409) {
              // هذا السؤال موجود من قبل
              this.error = true
              this.errorMsg = error.response.data.error
              this.errorTip = ''
              this.btnText = 'إغلاق'
              this.goToQuestion = 'الذهاب للسؤال'
              this.qUrl = `/q/${error.response.data.id}`
            }
          }
          this.loading = false
        }
      }
    },
  },
}
</script>

<style lang="scss">
.AQpageContainer {
  display: flex;
  flex: 1;
  align-items: center;
  .AQform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
  }
  .btn {
    width: 7rem;
    align-self: center;
  }
  .my-vue-editor {
    direction: ltr;
    text-align: left;
  }
  .category {
    padding-top: 2rem;
  }
}
.v-dialog {
  .v-card {
    padding: 1rem;
    text-align: center;

    .msg {
      color: var(--v-primary-base);
      padding: 1rem;
      font-size: 1.3rem;
      margin-bottom: 0;
    }
    .btnContainer {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    .errBtn {
      // color: var(--v-primary-base);
    }
  }
}
</style>
