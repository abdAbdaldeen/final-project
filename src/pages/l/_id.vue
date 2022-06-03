<template>
  <section class="FPContainer">
    <v-container>
      <template v-if="$route.params.id == 'انشاء-حساب'">
        <Sign-up-Form />
      </template>
      <template v-else-if="$route.params.id == 'تسجيل-الدخول'">
        <SignInForm />
      </template>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          valid: true,
          name: '',
          nameRules: [
            (v) => !!v || 'الاسم مطلوب',
            (v) =>
              (v &&
                v.length >= '10' &&
                'Name must be less than 10 characters') ||
              true,
          ],
          email: '',
          emailRules: [
            (v) => !!v || 'البريد الإلكتروني مطلوب',
            (v) => /.+@.+/.test(v) || 'يجب ان يكون البريد الاكتروني صحيح',
          ],
          password: 'Password',
          show: false,
          passwordRules: {
            required: (value) => !!value || 'كلمة المرور مطلوبة',
            min: (v) => (v && v.length >= 8) || 'Min 8 characters',
            emailMatch: () => `The email and password you entered don't match`,
          },
        }
      },
    },
  },
  head() {
    const { englishSiteName, twitterId, arabicSiteName, defaultImage380x285 } = this.$store.state;
    const pName = this.$route.params.id.replace(/-/g," ")
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
.FPContainer {
  flex: 1;
  display: flex;
  align-items: center;
  .FPform {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 1rem;
    max-width: 25rem;
    border-radius: 10px;
    box-shadow: $boxShadow;
    .sign-in {
      padding: 1rem;
      // text-align: center;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;

      #input {
        padding: 0.2rem;
        max-width: 20rem;
      }
      .buttons {
        width: 100%;
        padding: 0.2rem;
        display: flex;
        max-width: 20rem;
        align-items: center;
        justify-content: space-between;
      }
      p {
        color: var(--v-primary-base);
      }
    }
  }
}
</style>
