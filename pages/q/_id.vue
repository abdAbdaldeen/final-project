<template>
  <section>
    <v-container class="TheQuestionPageContainer">
      <the-question />
      <br />
      <div class="AnswersContainer">
        <h1>الإجابات</h1>
        <answer-box />
      </div>
      <v-form class="AddAnswerForm">
        <v-textarea outlined name="input-7-4" label="اضف اجابتك"></v-textarea>
        <v-btn class="AddAnswerBtn" type="submit" color="primary"> نشر </v-btn>
      </v-form>
    </v-container>
  </section>
</template>

<script>
import TheQuestion from '~/components/questionPageComponents/TheQuestion.vue'
import AnswerBox from '~/components/questionPageComponents/AnswerBox.vue'
export default {
  components: { TheQuestion, AnswerBox },
}
</script>

<style lang="scss">
.TheQuestionPageContainer {
  .AddAnswerForm {
    text-align: center;
  }
  .AddAnswerBtn {
    width: 7rem;
  }
}
</style>
