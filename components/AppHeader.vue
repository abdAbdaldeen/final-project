<template>
  <header class="header">
    <h1 class="logo">مبرمجون</h1>
    <form>
      <span></span>
      <input type="text" placeholder="ابحث عن سؤال" class="search" />
    </form>
    <v-btn href="/FormPage" color="#4ECCA3" rounded class="btn">
      تسجيل الدخول</v-btn
    >
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  padding: 1rem 0rem 1rem;
  background-color: #eee;
  
  * {
    margin: 0px;
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
  .search {
    width: 50rem;
    box-sizing: border-box;
    border: 2px solid rgb(57, 62, 70, 0.5);

    border-radius: 50px;
    font-size: 16px;
    background-color: #eeeeee;
    padding: 12px 20px 12px 40px;
    color: #eeeeee;
  }
}
</style>
