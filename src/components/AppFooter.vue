<template>
  <v-footer padless>
    <v-container>
      <div class="fCon">
        <nuxt-link to="/"><h1 class="fLogo">مبرمجون</h1></nuxt-link>
        <div class="linksCon">
          <nuxt-link to="/عن-مبرمجون"><h3>عن مبرمجون</h3></nuxt-link
          ><nuxt-link to="/ارشادات-الاستخدام"
            ><h3>إرشادات الاستخدام</h3></nuxt-link
          >
        </div>
      </div>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>جميع الحقوق محفوظة © AMR</strong>
      </v-col>
    </v-container>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.v-application a {
  text-decoration: none;
  h3 {
    color: #fff !important;
  }
}
.v-footer {
  // margin-top: 5rem;
  color: #fff !important;
  background-color: var(--v-primary-base) !important;

  .fCon {
    display: flex;
    margin-bottom: 1rem;
    .fLogo {
      color: #fff !important;
    }
    .linksCon {
      color: #fff !important;
      display: flex;
      column-gap: 2rem;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }
  @media (max-width: 768px) {
    .fCon {
      flex-direction: column;
      row-gap: 2rem;
      .linksCon {
        flex-direction: column;
        align-items: flex-start;
        justify-content: normal;
        flex: 0;
        row-gap: 0.5rem;
      }
    }
  }
}
</style>
