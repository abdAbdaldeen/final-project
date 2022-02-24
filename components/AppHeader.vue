<template>
  <header class="header">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <v-container class="container">
      <h1 class="logo">مبرمجون</h1>
      <form class="search-form">
        <span></span>
        <input type="text" placeholder="ابحث عن سؤال" class="search" />
      </form>
      <v-btn href="/FormPage" color="#4ECCA3" rounded class="btn"
        >تسجيل الدخول</v-btn
      >
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
  direction: rtl;
  box-sizing: border-box;
  font: normal normal 16px/1.8 'Cairo', sans-serif, Arial;
  font-weight: normal;
  

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 2.3rem;
    color: #4ecca3;
    margin: 0rem 1rem;
  }
  .btn {
    color: #232931;
    margin: 0rem 1rem;
  }

  .search-form {
    width: 100%;
  }

  .search {
    width: 100%;
    border: 2px solid rgb(57, 62, 70, 0.3);
    border-radius: 50px;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    background-color: #eeeeee;
    color: #eeeeee;
    min-width: 200px;
  }
  @media (max-width: 600px) {
    .search {
      width: 100%;
      border: 1px solid rgb(57, 62, 70, 0.3);
      border-radius: 50px;
      font-size: 10px;
      padding: 5px 15px 5px 20px;
    }
    .logo {
      font: normal normal 13px/1.9 'Cairo', sans-serif, Arial;
    }
    .btn{
        font-size: 7px;
    }
  }
  @media (max-width: 400px) {
    .search {
      width: 100%;
      border: 1px solid rgb(57, 62, 70, 0.3);
      border-radius: 50px;
      font-size: 5px;
      padding: 5px 15px 5px 20px;
    }
    .logo {
      font: normal normal 10px/1.9 'Cairo', sans-serif, Arial;
    }
    .btn{
        font-size: 5px;
        
        padding:0 5px;
    }
  }
}
</style>
