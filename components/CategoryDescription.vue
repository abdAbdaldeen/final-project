<template>
  <v-container>
    <div class="catDes">
      <v-img class="category" :src="data.src" :alt="data.alt"> </v-img>
      <div>
        <h3>{{ data.catName }}</h3>
        <p>{{ data.description }}</p>
      </div>
    </div>
  </v-container>
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
}
</script>

<style lang="scss">
.catDes {
  display: flex;
  gap: 1rem;
  .category {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 100%;
  }
}
</style>
