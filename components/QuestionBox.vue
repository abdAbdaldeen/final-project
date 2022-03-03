<template>
  <v-container>
    <div class="q-box">
      <h1 class="title" >{{ data.title }}</h1>
      <span class="votes-num">{{ data.votesNum }}</span>
      <p class="body">{{ data.body }}</p>
      <span class="category">{{ data.category }}</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'QuestionBox',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: 'ما هو الفرق بين Methods vs Computed in Vue',
          votesNum: 0,
          body: 'ما هو الفرق الرئيسي بين methods and a computed value في Vue.js? انها تبدو متشابهة وقابلة للتبديل',
          category: 'vue',
        }
      },
    },
  },
}
</script>

<style lang="scss">
.q-box {
  background-color: var(--v-qBoxBg-base);
  border: 2px solid var(--v-primary-base);
  display: grid;
  align-items: start;
 // align-content: space-around;
  padding:1rem 2rem;
  
  .title{
     padding-bottom: 1rem; 
     font-weight: bold;
  }
  .votes-num {
    border: 2px solid var(--v-primary-base);
    grid-row: 1;
    grid-column: 6;
    max-width: 2rem;
    text-align: center;
    grid-template-rows:end ;
  }
  .body{
      grid-row: 2;
  }
  .category{
      grid-row: 3;
      border: 2px solid var(--v-primary-base);
      max-width: 5rem;
      text-align: center;
  }
  @media (max-width: 768px) {
      padding:0.5rem 1rem;

      .title{
          font-size: 1rem !important;
          padding-bottom: 0.5rem;
          padding-left: 1rem;
      }
      .votes-num{
          min-width: 1.5rem;
          font-size: 0.7rem;
          
      }
      .body{
          font-size: 0.7rem !important;
      }
      .category{
          font-size:0.7rem ;
          width: 3rem;
      }
  }
}
</style>
