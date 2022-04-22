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
          <VueEditor v-model="body" :editorToolbar="$store.state.customToolbar"/>
        </my-vue-editor>
      </div>
      <v-autocomplete
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
      <v-btn class="btn" type="submit" color="primary" :loading="loading" :disabled="loading"> نشر </v-btn>
    </v-form>
    <!-- ============== -->
    <v-dialog v-model="error" class="FDialog">
      <div>
        {{errorMsg}}
      </div>
    </v-dialog>
  </v-container>
</template>

<script>
import MyVueEditor from '~/components/common/MyVueEditor.vue'
export default {
  components: { MyVueEditor },
  name: 'AskQuestionPage',

  data: () => ({
    title: '',
    titleRules: [
      (v) => !!v || 'العنوان مطلوب',
      (v) =>
        (v && v.length >= '20' && 'العنوان يجب ان يكون اقل من 20 حرف') || true,
    ],
    body: '',
    bodyRules: [(v) => !!v || 'السؤال مطلوب'],
    groupID: '',
    groupRules: [(v) => !!v || 'التصنيف مطلوب'],

    error: false,
    errorMsg:"",
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
          this.$router.push('/q/'+res.data.qID)
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
            } else if (error.response.status == 409) {
              // هذا السؤال موجود من قبل
              this.error = true
              this.errorMsg = error.response.data.error
              // let qUrl = `/q/${error.response.data.id}`
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
  .my-vue-editor{
    direction: ltr;
    text-align: left;
  }
}
</style>
