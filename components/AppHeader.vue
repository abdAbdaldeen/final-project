<template>
  <header class="header">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <v-container class="container">
      <h1 class="logo">مبرمجون</h1>
       <form class="test">
       <v-icon class="icon" color="primary" large>search</v-icon>
        <input type="text" placeholder="ابحث عن سؤال" class="search" />
       </form>
      <v-btn href="/FormPage" color="primary" class="btn" :small="$vuetify.breakpoint.xsOnly"  >تسجيل الدخول</v-btn>
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
  background-color: #eee;

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
  

  .test{
    
      width: 100%;
  }

  .icon{
      width: 10rem;
  }

  .search {
    width:100%;
    max-width: 40rem;
    display: block;
    margin: auto;
    border: 2px solid rgb(57, 62, 70, 0.3);
    border-radius: 10px;
    font-size: 14px;
    padding: 8px 20px;
    background-color: #eeeeee;
    color: #eeeeee;
    
  }
  @media (max-width: 768px) {
    .search {
      border: 1px solid rgb(57, 62, 70, 0.3);
      font-size: 10px;
      padding: 5px 15px 5px 20px;
    }
    .logo {
      font-size: 1rem;
    }
    .btn{
        font-size: 10px;
    }
  }
}
</style>
