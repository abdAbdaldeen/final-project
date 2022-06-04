<template>
  <section class="container">
    <!-- <script async src="https://cse.google.com/cse.js?cx=20ceafc9ef06684f4"></script>
<div class="gcse-search"></div> -->
    <div
      class="block-content search-container my-8"
      itemscope
      itemtype="https://schema.org/SearchResultsPage"
    >
      <!--Search from Google-->
      <div id="mawdoo3_search_div">
        <div class="gcse-searchresults-only"></div>
      </div>
      <!--/Search from Google-->
    </div>
  </section>
</template>
<script>
export default {  
  head() {
    const { englishSiteName, twitterId, arabicSiteName, defaultImage380x285 } = this.$store.state;
    const pName = 'بحث'
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
      script: [
      {
        // innerHTML: 'console.log("hello")',
      	// __dangerouslyDisableSanitizers: ['script']
        type: 'text/javascript',
        src: "https://cse.google.com/cse.js?cx=20ceafc9ef06684f4",
        async: true,
      }
    ]
    };
  }, 
  beforeDestroy() {
    document.querySelector("input.search").value = ""
  },
  };
</script>
<style lang="scss" scoped>
::v-deep #mawdoo3_search_div {
  .gs-no-results-result .gs-snippet {
    border: 1px solid #e5e5e5 !important;
    background-color: #f5f5f5 !important;
  }

  .gsc-selected-option-container {
    max-width: 100% !important;
  }

  /* Start Search Result */
  .gsc-control-cse,
  .gs-webResult .gs-snippet {
    font: normal normal 16px/1.5 Cairo, "helvetica-light", sans-serif, Arial !important;
  }

  .gsc-result .gs-title {
    height: 2em !important;
    line-height: 2em !important;
  }

  .gs-promotion-image-box {
    margin-left: 5px;
  }

  .gs-web-image-box {
    margin-left: 10px !important;
  }

  .search-container {
    word-break: normal;
    word-wrap: normal;
  }

  .gsc-option-menu-container {
    min-width: 85px !important;
  }

  /* End Search Result */
  ._search-res-container {
    min-height: 80vh;
  }
}
</style>