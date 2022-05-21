<template>
  <v-container class="rulesCon">
    <h1>{{ data.title }}</h1>
    <br />
    <div class="ruleCard">
      <p class="ruleBody">{{ data.rule1.body }}</p>
      <v-img
        :src="data.rule1.src"
        width="200"
        height="270"
        class="ruleImg"
      ></v-img>
    </div>
    <br />
    <div class="ruleCardRev">
      <v-img
        :src="data.rule2.src"
        :width="$vuetify.breakpoint.xsOnly ? '350' : '700'"
        :height="$vuetify.breakpoint.xsOnly ? '200' : '400'"
        class=""
      ></v-img>
      <p class="ruleBody">{{ data.rule2.body }}</p>
    </div>
    <br />
    <div class="ruleCard">
      <p class="ruleBody">{{ data.rule3.body }}</p>
      <v-img
        :src="data.rule3.src"
        :width="$vuetify.breakpoint.xsOnly ? '350' : '700'"
        :height="$vuetify.breakpoint.xsOnly ? '200' : '400'"
        class=""
      ></v-img>
    </div>
    <br />
    <div class="ruleCardRev">
      <v-img
        :src="data.rule4.src"
        :width="$vuetify.breakpoint.xsOnly ? '350' : '700'"
        :height="$vuetify.breakpoint.xsOnly ? '200' : '400'"
        class=""
      ></v-img>
      <p class="ruleBody">{{ data.rule4.body }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: 'إرشادات الاستخدام',
          rule1: {
            body: '1- بمجرد تسجيلك كمستخدم جديد لاحظ أننا قمنا بإضافة عدد من العملات في رصيدك. ',
            src: '/coins.png',
          },
          rule2: {
            body: '2- عند طرحك لسؤال سيتم خصم خمس عملات من رصيدك.',
            src: 'addQ.gif',
          },
          rule3: {
            body: '3- لكسب العملات يجب عليك الحصول على تصويتات إيجابية، ولقاء كل تصويت إيجابي تحصل عليه سواءً على أسئلة قمت بطرحها أو على إجابات على أسئلة الآخرين سيتم اضافة عملة واحدة إلى رصيدك.',
            src: 'upVotes.png',
          },
          rule4: {
            body: '4- بالمقابل فإن كل تصويت سلبي تحصل عليه سواء على أسئلة قمت بطرحها أو على إجابات على أسئلة الآخرين سينقص عملة واحدة من مجموع عملاتك.',
            src: 'downVotes.png',
          },
        }
      },
    },
  },
}
</script>

<style lang="scss">
.rulesCon{
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
.ruleCard {
  display: flex;
  max-width: 60rem;
  margin: auto;
  column-gap: 0.5rem;}
  .ruleCardRev{
    display: flex;
  max-width: 60rem;
  margin: auto;
  column-gap: 0.5rem;
  }
  .ruleBody {
    max-width: 20rem;
    align-self: center;
  }
  .ruleImg {
    max-width: 200px !important;
    max-height: 270px !important;
  }

@media (max-width: 768px) {
  .ruleCard {
    display: flex;
    flex-direction: column;
    .ruleBody {
      max-width: 20rem;
      align-self: start;
    }
  }
  .ruleCardRev{
    display: flex;
    flex-direction: column-reverse;
  }
}}
</style>
