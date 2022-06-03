<template>
  <div>
    <AskQuestionBox />
    <QuestionList />
  </div>
</template>

<script>
import QuestionList from '~/components/common/QuestionList.vue'
export default {
  components: { QuestionList },
  name: 'IndexPage',
  async asyncData({ $axios, store, error, redirect }) {
    return await $axios
      .$get('questions/get')
      .then((r) => {
        const questions = r.questions
        const lastKey = r.lastKey
        store.commit('questions/add', { questions, lastKey })
      })
      .catch((e) => {
        console.error(e)
        // error({ statusCode: 404, message: 'Post not found' });
      })
  },
  head() {
    const { englishSiteName, twitterId } = this.$store.state
    const gName = ''
    const gDisc =
      'مبرمجون هو مجتمع عربي للمبرمجين يتيح لهم طرح الأسئلة البرمجية والإجابة عليها وتبادل المعلومات والأفكار والخبرات في المواضيع البرمجية المختلفة باللغة العربية.'
    return {
      title: gName + ' - ' + this.$store.state.arabicSiteName,
      meta: [
        { name: 'keywords', content: this.$store.state.arabicSiteName },
        { name: 'description', content: gDisc },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'application-name', content: this.$store.state.arabicSiteName },
        {
          name: 'twitter:image',
          content: this.$store.state.defaultImage380x285,
        },
        {
          name: 'thumbnail',
          content: this.$store.state.defaultImage380x285,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        // eslint-disable-next-line no-unneeded-ternary
        {
          name: 'twitter:site',
          content: `@${twitterId || englishSiteName}`,
        },
        {
          name: 'twitter:image:src',
          content: this.$store.state.defaultImage380x285,
        },
        {
          name: 'twitter:title',
          content: this.$store.state.arabicSiteName,
        },
        { name: 'twitter:description', content: gDisc },
        {
          property: 'og:image',
          content: this.$store.state.defaultImage380x285,
        },
        {
          property: 'og:title',
          content: this.$store.state.arabicSiteName,
        },
        { property: 'og:type', content: 'article' },
        {
          property: 'og:url',
          content: this.$store.state.siteUrl,
        },
        { property: 'og:description', content: gDisc },
        { property: 'site_name', content: this.$store.state.arabicSiteName },
        {
          itemprop: 'name',
          content: this.$store.state.arabicSiteName,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.$store.state.siteUrl,
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
