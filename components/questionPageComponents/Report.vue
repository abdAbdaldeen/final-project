<template lang="">
<div>
  <v-icon
   v-if="user.token"
    class="reportIcon"
    :class="{ reported: reportedVar }"
    :title="reportedVar ? 'الغاء الابلاغ' : 'إبلاغ'"
    outline
    @click="report"
    :disabled="loading"
    >report</v-icon
  >
   <v-icon
   v-else
    class="reportIcon"
    :class="{ reported: reportedVar }"
    :title="reportedVar ? 'الغاء الابلاغ' : 'إبلاغ'"
    outline
    @click="popupToggle"
    :disabled="loading"
    >report</v-icon
  >
</div>
</template>
<script>
export default {
  props: {
    reported: {
      default: false,
    },
    collection: {},
    docID: {},
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
    async report() {
      this.loading = true
      const res = await this.$axios
        .post(
          'report',
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
      this.reportedVar = res.data.reported
      this.loading = false
    },
  },
}
</script>
<style>
.reportIcon.reported {
  color: #ff0e0e;
}
</style>
