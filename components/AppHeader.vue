<template>
  <section class="header-container">
    <v-container>
      <header class="header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div class="container">
          <nuxt-link to="/"><h1 class="logo">مبرمجون</h1></nuxt-link>

          <form class="search-form">
            <input type="text" placeholder="ابحث عن سؤال" class="search" />
            <v-icon class="search-icon" color="primary">search</v-icon>
          </form>

          <v-icon
            v-if="$vuetify.theme.dark == true"
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          >
            light_mode
          </v-icon>
          <v-icon
            v-else
            class="mode-icon"
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            >dark_mode</v-icon
          >

          <v-btn
            v-if="!user.token"
            to="/l/تسجيل-الدخول"
            color="primary"
            class="btn"
            :small="$vuetify.breakpoint.xsOnly"
            >تسجيل الدخول</v-btn
          >
          <v-row v-else justify="center">
            <v-menu bottom min-width="200px" rounded offset-y>
              <template #activator="{ on }">
                <v-btn icon large v-on="on">
                  <v-avatar
                    class="avatar"
                    color="primary"
                    :size="$vuetify.breakpoint.xsOnly ? '30' : '43'"
                  >
                    <img
                      v-if="user.photoURL"
                      :src="user.photoURL"
                      :alt="user.displayName"
                    />
                    <v-icon
                      v-else
                      :small="$vuetify.breakpoint.xsOnly"
                      color="background"
                      >account_circle</v-icon
                    >
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar
                      class="avatar"
                      color="primary"
                      :size="$vuetify.breakpoint.xsOnly ? '30' : '43'"
                    >
                      <img
                        v-if="user.photoURL"
                        :src="user.photoURL"
                        :alt="user.displayName"
                      />
                      <v-icon
                        v-else
                        :small="$vuetify.breakpoint.xsOnly"
                        color="background"
                        >account_circle</v-icon
                      >
                    </v-avatar>
                    <h3>{{ user.displayName }}</h3>
                    <p class="text-caption mt-1">
                      {{ user.email }}
                    </p>
                    <div class="coinContainer">
                      <v-img
                        class="coinImg"
                        src="/money.png"
                        width="30"
                        height="30"
                      ></v-img>
                      <h4>{{ user.coins }}</h4>
                    </div>
                    <v-divider class="my-3"></v-divider>
                    <v-btn class="btn" depressed rounded text>
                      عرض الملف الشخصي
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text @click="logout">
                      تسجيل الخروج
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
          </v-row>
        </div>
      </header>
      <nav>
        <CategoriesBar />
      </nav>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AppHeader',
  // data: () => ({
  //   coins: 0,
  // }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken')
      this.$store.commit('user/logout')
      this.$cookies.remove('authToken')
      window.location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  box-shadow: 0 5px 10px rgba(122, 127, 134, 0.3);
  header {
    a {
      text-decoration: none;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 1.2rem;
    }
    .logo {
      word-break: normal;
      font-size: 2rem;
      color: #4ecca3;
    }

    .search-form {
      display: grid;
      grid-template-columns: 6fr 1fr;
      width: 100%;
      border: 2px solid rgba(178, 184, 192, 0.3);
      border-radius: 10px;
    }

    .search-form:hover {
      border: 2px solid var(--v-primary-base);
    }

    .search-icon {
      justify-content: flex-end;
      font-size: 1.7rem;
      margin-left: 0.5rem;
    }

    .search {
      width: 100%;
      max-width: 50rem;
      display: block;
      margin: auto;
      font-size: 14px;
      padding: 8px 7px;
      background-color: transparent;
    }

    .search:focus {
      outline: none;
    }
    .cardIcon {
      vertical-align: middle;
    }

    @media (max-width: 768px) {
      .container {
        column-gap: 1rem;
      }

      .search {
        font-size: 10px;
        padding: 5px 15px 5px 20px;
      }
      .search-icon {
        font-size: 1.5rem;
      }
      .logo {
        font-size: 1rem;
      }
      .btn {
        font-size: 10px !important;
      }
    }
  }
}
.coinContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  color: #efae2e;
  .coinImg {
    flex-grow: 0;
    width: 30px;
    height: 30px;
  }
}
</style>
