<template>
  <v-container class="AQpageContainer">
    <v-form class="AQform" ref="form" @submit.prevent="submit">
      <v-text-field
        v-model="title"
        label=" عنوان السؤال"
        outlined
      ></v-text-field>
      <v-textarea
        v-model="body"
        outlined
        name="input-7-4"
        label="نص السؤال"
      ></v-textarea>
      <v-autocomplete
        v-model="groupID"
        :items="categories"
        item-text="name"
        label="اختر التصنيف"
        outlined
        dense
        clearable
      ></v-autocomplete>
      <v-btn class="btn" type="submit" color="primary"> نشر </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'AskQuestionPage',
  data: () => ({
    title: '',
    body: '',
    groupID: '',

    loading: false,
  }),
  computed:{
    categories() {
      return this.$store.state.categories.categories;
    },
  },
  methods: {
    async submit() {
      
        try {
          this.loading = true
          const res = await this.$axios.post(
            'questions/add',
            {
              title: this.title,
              body: this.body,
              groupID: this.groupID.replace(/ /g,"-"),
            },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`,
              },
            }
          )
          console.log(res)
          this.$router.push('/')
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
}
</style>
