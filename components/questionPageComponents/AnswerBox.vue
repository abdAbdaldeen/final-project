<template>
  <div class="ABContainer">
    <add-vote />
    <p>{{ theAnswer }}</p>
    <div class="DateUserInfo">
      <p>اجيب في {{ date }}</p>
      <div class="userInfo">
        <v-avatar
          class="avatar"
          color="primary"
          :size="$vuetify.breakpoint.xsOnly ? '30' : '40'"
        >
          <v-icon :small="$vuetify.breakpoint.xsOnly" color="background"
            >account_circle</v-icon
          >
        </v-avatar>
        <p>{{ userName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AddVote from './AddVote.vue'
export default {
  name: 'AnswerBox',
  components: { AddVote },
  data() {
    return {
      theAnswer:
        'Computed Property:الاسم الأكثر ملاءمة لقيمة محسوبة هو خاصية محسوبة. في الواقع ،عندما يتم إنشاء مثيل لـ Vue ، يتم تحويل الخصائص المحسوبة إلى  Vue باستخدام برنامج getter  وأحيانًا جهاز ضبط. في الأساس ، يمكنك التفكير في القيمة المحسوبة كقيمة مشتقة سيتم تحديثها .Method:هي مجرد وظيفة مرتبطة بمثيل Vue. سيتم تقييمه فقط عندما تسميه صراحةً.مثل جميع وظائف جافا سكريبت ، فإنه يقبل المعلمات وسيتم إعادة تقييمها في كل مرة يتم استدعاؤها. الأساليب مفيدة في نفس المواقف ، أي وظيفة مفيدة.',
      date: '4 / 2 / 2022',
      userName: 'محمد احمد',
    }
  },
}
</script>

<style lang="scss">
.ABContainer {
  display: grid;
  grid-template-columns: 1fr 11fr 3fr;
  column-gap: 1.5rem;
  box-shadow: $boxShadow;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  margin: 1rem 0 2rem 0;

  .DateUserInfo {
    align-self: end;
  }
  .userInfo {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 8fr;
    gap: 0;
    font-size: 0.8rem;
    .DateUserInfo {
      grid-column: 1 / span 5;
    }
  }
}
</style>
