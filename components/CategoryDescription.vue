<template>
  <div class="catDes">
    <v-img
      v-for="category in categories"
      :key="category.gID"
      class="category"
      :src="category.imgUrl"
      :alt="category.name"
    >
    </v-img>
    <div>
      <h3 v-for="category in categories" :key="category.gID">
        {{ category.name }}
      </h3>
      <!-- <p>{{ data.description }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryDescription',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          src: 'https://miro.medium.com/proxy/1*-8AAdexfOAK9R-AIha_PBQ.png',
          alt: 'vue.js',
          catName: 'vue.js',
          description:
            ' هو إطار عمل جافا سكريبت للواجهة الأمامية لنموذج مفتوح المصدر وعرض وطراز عرض لبناء واجهات مستخدم وتطبيقات ذات صفحة واحدة.  تم إنشاؤه بواسطة Evan You ، ويحتفظ به هو وبقية أعضاء الفريق الأساسي النشطين.',
        }
      },
    },
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
}
</script>

<style lang="scss">
.catDes {
  display: grid;
  grid-template-columns: 2fr 12fr;
  font-size: 1.5rem;
  align-items: center;
  .category {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 100%;
  }
}
</style>
