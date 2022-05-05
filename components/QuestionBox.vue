<template>
  <v-container class="QBoxContainer">
    <nuxt-link :to="'/q/' + data.qID">
      <div class="q-box">
        <div class="row1">
          <h1 class="QBtitle">{{ data.title }}</h1>
          <p class="QBvotes-num">{{ data.votesCount + '   صوت' }}</p>
        </div>
        <p class="QBbody">{{ data.body.slice(0, 150) + '...' }}</p>
        <div class="row3">
          <p class="QBcategory">{{ data.groupID }}</p>
          <p class="QBdate">تم النشر في {{ data.createdAt }}</p>
        </div>
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

    padding: 1rem 2rem;
    border-radius: 10px;
    color: var(--v-textColor-base);
    .row1 {
      display: flex;
      justify-content: space-between;
      .QBtitle {
        padding-bottom: 1rem;
        font-weight: bold;
        max-width: 60rem;
      }
      .QBvotes-num {
        box-shadow: 0px 0px 5px var(--v-secondary-lighten5);
        border-radius: 4px;
        padding: 0.5rem 0.8rem;
        align-self: center;
      }
    }
    .QBbody {
    }
    .row3 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      p {
        margin: 0;
      }
      .QBcategory {
        // border: 2px solid var(--v-primary-base);
        box-shadow: 0px 0px 5px var(--v-secondary-lighten5);
        border-radius: 4px;
        // max-width: 5rem;
        padding: 0.5rem 1rem;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;

      .QBtitle {
        font-size: 1rem !important;

        padding-left: 1rem;
      }
      .QBvotes-num {
        text-align: center;
        min-width: 1.5rem;
        font-size: 0.7rem;
      }
      .QBbody {
        font-size: 0.7rem !important;
      }
      .QBcategory {
        font-size: 0.7rem;
        padding: 0.5rem 0.5rem;
      }
      .QBdate {
        font-size: 0.7rem !important;
      }
    }
  }
}
</style>
