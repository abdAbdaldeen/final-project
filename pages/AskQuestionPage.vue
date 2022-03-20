<template>
  <v-container class="AQpageContainer">
    <v-form class="AQform">
      <v-text-field label=" عنوان السؤال" outlined></v-text-field>
      <v-textarea outlined name="input-7-4" label="نص السؤال"></v-textarea>
      <v-autocomplete
        :items="data.categories"
        label="اختر التصنيف"
        outlined
        dense
        clearable
      ></v-autocomplete>
      <v-btn class="btn" type="submit" color="primary"> نشر </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'AskQuestionPage',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          categories: [
            'HTML',
            'CSS',
            'JS',
            'VUE',
            'nuxt',
            'react',
            'sql',
            'c++',
            'java',
            'python',
            'mongoDB',
            'firebase',
          ],
        }
      },
    },
  },
}
</script>

<style lang="scss">
.AQpageContainer {
  display: flex;
  flex: 1;
  align-items: center;
  .AQform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
  }
  .btn {
    width: 7rem;
    align-self: center;
  }
}
</style>
