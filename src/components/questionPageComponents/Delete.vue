<template lang="">
  <div>
    <v-icon title="حذف" outline @click="deleteDoc" :disabled="loading"
      >delete_forever</v-icon
    >
  </div>
</template>
<script>
export default {
  props: {
    collection: {},
    docID: {},
    deleteFun: {},
  },
  data() {
    return {
      reportedVar: this.reported,
      loading: false,
    }
  },
  computed: {
    data() {
      return this.$store.state.question.question
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    popupToggle() {
      console.log('hello')
      this.$store.commit('user/popupToggle')
    },
    async deleteDoc() {
      this.loading = true
      const res = await this.$axios
        .post(
          'delete',
          {
            docID: this.docID,
            collection: this.collection,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        )
        .catch((e) => {
          console.error(e)
        })
      if (res) {
        this.deleteFun()
      }
      this.loading = false
    },
  },
}
</script>
<style></style>
