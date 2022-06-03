<template>
  <v-container class="aboutCon">
    <h1>{{ data.title }}</h1>
    <br />
    <p>{{ data.p1 }}</p>
    <br />
    <p>{{ data.p2 }}</p>
    <br />
    <p>{{ data.p3 }}</p>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: 'عن مبرمجون',
          p1: 'مبرمجون هو مجتمع عربي  للمبرمجين بغرض طرح الاسئلة البرمجية والإجابة عليها وتبادل المعلومات والأفكار والخبرات في المواضيع البرمجية المختلفة.',
          p2: 'هدفنا هو جعل هذا المجتمع بمثابة ملتقى للمبرمجين العرب ليكون مكانهم المريح لتبادل المعلومات بطريقة منظمة وعلمية وموثوقة واستقاء المعلومات من مبرمجين ذوي خبرة وتجربة عملية، وإقامة النقاشات العلمية البناءة تحت الرقابة وبحسب قوانين الاستخدام. كذلك نحن نسعى ليكون مبرمجون هو المرجع الموثوق للمبرمجين العرب عند بحثهم عن حلول للمشاكل البرمجية التي تواجههم باللغة العربية. ',
          p3: 'مجتمع مبرمجون قائم بأسلوب حديث وإدارة جماعية بحيث يعتمد بشكل أساسي على تصويت المستخدمين لرفع المساهمات (الأصوات) على المحتوى الإيجابي وتخفيضها على المحتوى السلبي.لذلك نحن نعول على وعيكم لإدارة هذا المجتمع ليكون مجتمع عربي ناضج ومفيد.',
        }
      },
    },
  },
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
}
</script>

<style lang="scss">
.aboutCon {
  max-width: 50rem;
}
</style>
