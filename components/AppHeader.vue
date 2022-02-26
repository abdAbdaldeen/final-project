<template>
  <header class="header">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <v-container class="container">
      <h1 class="logo">مبرمجون</h1>
      <form class="test">
        <input type="text" placeholder="ابحث عن سؤال" class="search" />
        <v-icon
          class="icon"
          color="primary"
          large
          :small="$vuetify.breakpoint.xsOnly"
          >search</v-icon
        >
      </form>
      <v-btn
        v-if="true"
        href="/FormPage"
        color="primary"
        class="btn"
        :small="$vuetify.breakpoint.xsOnly"
        >تسجيل الدخول</v-btn
      >
      <p v-else>test</p>
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
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 2.5rem;
  }
  .logo {
    word-break: normal;
    font-size: 2rem;
    color: #4ecca3;
  }

  .test {
    display: grid;
    grid-template-columns: 6fr 1fr;
    width: 100%;
    border: 2px solid rgb(57, 62, 70, 0.3);
    border-radius: 10px;
  }

  .icon {
  //  border: 1px solid green;
  justify-content: flex-end;
  font-size: 70px;
  }

  .search {
   // border: 1px solid red;
    width: 100%;
    max-width: 50rem;
    display: block;
    margin: auto;
    font-size: 14px;
    padding: 8px 5px;
    background-color: transparent;
  }
  @media (max-width: 768px) {
    .search {
      font-size: 10px;
      padding: 5px 15px 5px 20px;
    }
    .icon{
        font-size: 25px;
    }
    .logo {
      font-size: 1rem;
    }
    .btn {
      font-size: 10px;
    }
  }
}
</style>
