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
    <br />
    <div class="ruleCard">
      <p class="ruleBody">{{ data.rule5.body }}</p>
      <v-img
        :src="data.rule5.src"
        :width="$vuetify.breakpoint.xsOnly ? '150' : '200'"
        :height="$vuetify.breakpoint.xsOnly ? '150' : '200'"
        class=""
      ></v-img>
    </div>
    <br />
    <div class="ruleCardRev">
      <v-img
        :src="data.rule6.src"
        :width="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        :height="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        class=""
      ></v-img>
      <p class="ruleBody">{{ data.rule6.body }}</p>
    </div>
    <br />
    <div class="ruleCard">
      <p class="ruleBody">{{ data.rule7.body }}</p>
      <v-img
        :src="data.rule7.src"
        :width="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        :height="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        class=""
      ></v-img>
    </div>
    <br />
    <div class="ruleCardRev">
      <v-img
        :src="data.rule8.src"
        :width="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        :height="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        class=""
      ></v-img>
      <p class="ruleBody">{{ data.rule8.body }}</p>
    </div>
    <br />
    <div class="ruleCard">
      <p class="ruleBody">{{ data.rule9.body }}</p>
      <v-img
        :src="data.rule9.src"
        :width="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        :height="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        class=""
      ></v-img>
    </div>
    <br />
    <div class="ruleCardRev">
      <v-img
        :src="data.rule10.src"
        :width="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        :height="$vuetify.breakpoint.xsOnly ? '150' : '256'"
        class=""
      ></v-img>
      <p class="ruleBody">{{ data.rule10.body }}</p>
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
          title: ' قواعد وإرشادات الاستخدام',
          rule1: {
            body: '1- بمجرد تسجيلك كمستخدم جديد لاحظ أننا قمنا بإضافة عدد من العملات في رصيدك. ',
            src: '/coins.png',
          },
          rule2: {
            body: '2- عند طرحك لسؤال سيتم خصم خمس عملات من رصيدك.',
            src: 'addQ.gif',
          },
          rule3: {
            body: '3- لكسب العملات يجب عليك الحصول على تصويتات إيجابية، ولقاء كل تصويت إيجابي تحصل عليه سواءً على أسئلة قمت بطرحها أو عند إجابتك على أسئلة الآخرين سيتم اضافة عملة واحدة إلى رصيدك.',
            src: 'upVotes.png',
          },
          rule4: {
            body: '4- بالمقابل فإن كل تصويت سلبي تحصل عليه سواء على أسئلة قمت بطرحها أو عند إجابتك على أسئلة الآخرين سينقص عملة واحدة من مجموع عملاتك.',
            src: 'downVotes.png',
          },
          rule5: {
            body: '5- بمجرد حصول إجابتك على 10 إبلاغات سيتم حذفها تلقائياً.',
            src: 'report2.png',
          },
          rule6: {
            body: '6- ابحث في المجتمع قبل طرح سؤالك.',
            src: 'search.png',
          },
          rule7: {
            body: '7- ناقش بشكل حضاري واحترم آراء الآخرين.',
            src: 'Discussion.png',
          },
          rule8: {
            body: '8- أكتب عنواناً واضحاً ومختصراً لسؤالك.',
            src: 'title.png',
          },
          rule9: {
            body: '9- لا تتردد في إبداء رأيك والتصويت على الأسئلة والإجابات، ولا تطلب من الآخرين التصويت على أسئلتك أو إجاباتك.',
            src: 'vote.png',
          },
          rule10: {
            body: '10- لا تنشر الروابط الدعائية ولا تروّج لخدمات أو عروض.',
            src: 'no.png',
          },
        }
      },
    },
  },
}
</script>

<style lang="scss">
.rulesCon {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  .ruleCard {
    display: flex;
    margin: auto;
    column-gap: 2rem;
  }
  .ruleCardRev {
    display: flex;
    margin: auto;
    column-gap: 2rem;
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
      justify-content: center;
      align-items: center;
      row-gap: 1rem;
      .ruleBody {
        max-width: 20rem;
        align-self: start;
      }
    }

    .ruleCardRev {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      row-gap: 1rem;
    }
  }
}
</style>
