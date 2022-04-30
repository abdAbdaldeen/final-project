<template>
  <v-container class="QBoxContainer">
    <nuxt-link :to="'/q/' + data.qID">
      <div class="q-box">
        <h1 class="QBtitle">{{ data.title }}</h1>
        <span class="QBvotes-num">{{ data.votesCount }} صوت</span>
        <p class="QBbody">{{ data.body.slice(0, 150) + '...' }}</p>
        <span class="QBcategory">{{ data.groupID }}</span>
        <p class="QBdate">تم النشر في {{ data.createdAt }}</p>
      </div></nuxt-link
    >
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
          title: 'ما هو الفرق بين Methods و Computed في Vue',
          votesCount: 0,
          body: 'ما هو الفرق الرئيسي بين methods and a computed value في Vue.js? انها تبدو متشابهة وقابلة للتبديل',
          groupID: 'vue',
        }
      },
    },
  },
}
</script>

<style lang="scss">
.QBoxContainer {
  a {
    text-decoration: none;
  }
  .q-box {
    //background-color: var(--v-qBoxBg-base);
    box-shadow: $boxShadow;
    display: grid;
    align-items: start;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: var(--v-textColor-base);

    .QBtitle {
      padding-bottom: 1rem;
      font-weight: bold;
      max-width: 60rem;
    }
    .QBvotes-num {
      box-shadow: 0px 0px 5px var(--v-secondary-lighten5);
      border-radius: 4px;

      // border: 2px solid var(--v-primary-base);
      grid-row: 1;
      grid-column: 6;
      // max-width: 2rem;
      justify-self: flex-end;
      padding: 0.4rem 0.8rem;

      text-align: center;
      grid-template-rows: end;
    }
    .QBbody {
      grid-row: 2;
    }
    .QBcategory {
      grid-row: 3;
      // border: 2px solid var(--v-primary-base);
      box-shadow: 0px 0px 5px var(--v-secondary-lighten5);
      border-radius: 4px;
      // max-width: 5rem;
      justify-self: flex-start;
      padding: 0.5rem 1rem;
      text-align: center;
    }
    .QBdate {
      grid-row: 3;
      grid-column: 6;
      justify-self: flex-end;
    }
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;

      .QBtitle {
        font-size: 1rem !important;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
      }
      .QBvotes-num {
        min-width: 1.5rem;
        font-size: 0.7rem;
      }
      .QBbody {
        font-size: 0.7rem !important;
      }
      .QBcategory {
        font-size: 0.7rem;
        padding: 0.5rem 0.5rem;
        width: 3rem;
      }
    }
  }
}
</style>
