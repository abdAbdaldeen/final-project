<template>
  <v-container>
    <v-form>
      <v-text-field label=" عنوان السؤال" outlined></v-text-field>
      <v-textarea outlined name="input-7-4" label="نص السؤال"></v-textarea>
      <v-autocomplete
        :items="data.categories"
        label="select category"
        outlined
        dense
        clearable
      ></v-autocomplete>
      <v-btn class="mr-4" type="submit" color="primary"> نشر </v-btn>
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
form {
  display: flex;
  flex-direction: column;
}
</style>
