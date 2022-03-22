<template>
  <div>
    <h1>{{ data.title }}</h1>
    <hr />
    <p>{{ data.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheQuestion',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: 'ما هو الفرق بين Methods و Computed في Vue',
          votesNum: 0,
          body: 'ما هو الفرق الرئيسي بين methods and a computed value في Vue.js? انها تبدو متشابهة وقابلة للتبديل',
          category: 'vue',
        }
      },
    },
  },
}
</script>

<style></style>
