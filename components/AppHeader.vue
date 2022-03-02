<template>
  <header class="header">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <v-container class="container">
      <h1 class="logo">مبرمجون</h1>
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
        v-if="false"
        href="/FormPage"
        color="primary"
        class="btn"
        :small="$vuetify.breakpoint.xsOnly"
        >تسجيل الدخول</v-btn
      >
      <v-avatar
        v-else
        class="avatar"
        color="primary"
        :size="$vuetify.breakpoint.xsOnly ? '30' : '43'"
      >
        <v-icon :small="$vuetify.breakpoint.xsOnly" color="background"
          >account_circle</v-icon
        >
      </v-avatar>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 5px 10px rgba(122, 127, 134, 0.3);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
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

  .search-form:focus {
    border: 2px solid #4ecca3;
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

  @media (max-width: 768px) {
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
</style>
