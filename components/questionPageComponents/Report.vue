<template lang="">
  <v-icon
    class="reportIcon"
    :class="{ reported: reportedVar }"
    :title="reportedVar ? 'الغاء الابلاغ' : 'إبلاغ'"
    outline
    @click="report"
    :disabled="loading"
    >report</v-icon
  >
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
  methods: {
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
