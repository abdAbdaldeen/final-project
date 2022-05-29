<template>
  <v-app>
    <AppHeader />

    <Nuxt />

    <v-btn
      v-if="$vuetify.breakpoint.xsOnly"
      :key="activeFab.icon"
      bottom
      left
      large
      fab
      :color="activeFab.color"
      class="float"
      @click="dialog = true"
    >
      <v-icon large>{{ activeFab.icon }}</v-icon>
    </v-btn>
    <v-dialog v-if="$vuetify.breakpoint.xsOnly" v-model="dialog" class="searchDialog">
      <v-card>
        <form class="search-form">
          <input type="text" placeholder="ابحث عن سؤال" class="search" />
          <v-icon class="search-icon" color="primary" @click="dialogOn"
            >search</v-icon
          >
        </form>
      </v-card>
    </v-dialog>
    <SignInFormDialog />
    <AppFooter />
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),

  async fetch() {
    await this.$axios.$get('groups/get').then((res) => {
      this.$store.commit('categories/add', res)
    })
  },
  computed: {
    activeFab() {
      return { color: 'primary', icon: 'search' }
    },
  },
  methods: {
    dialogOn() {
      console.log(this.dialog)
    },
  },
}
</script>
<style lang="scss" >
@media (max-width: 768px) {
  .v-dialog{
    // align-self: flex-start !important;
    .v-card {
      padding: 0.5rem;

      .search-form {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        max-width: 100rem;
        // border: 2px solid rgba(178, 184, 192, 0.3);
        border-radius: 10px;

        .search-icon {
          // justify-content: flex-end;
          font-size: 1.7rem;
          margin-left: 0.5rem;
        }

        .search {
          width: 100%;
          font-size: 14px;
          padding: 8px 10px;
          background-color: transparent;
        }

        .search:focus {
          outline: none;
        }}
      }
    
  }
  .float {
    position: fixed !important;
    bottom: 0;
    left: 0;
    margin: 2rem 1rem;
  }
}
</style>
