<template>
  <div class="categories">
    <div v-for="category in categories" :key="category.gID">
      <nuxt-link :to="'/g/'+category.gID">
        <v-img
          class="category"
          :src="category.imgUrl"
          :alt="category.name"
          max-width="100px"
          max-height="140px"
        >
        </v-img>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesBar',
  computed:{
    categories() {
      return this.$store.state.categories.categories;
    },
  }
}
</script>

<style lang="scss">
.categories {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
  white-space: nowrap;
  border-top: 1px solid var(--v-secondary-lighten5);
  &::-webkit-scrollbar {
    height: 0.3em;
  }

  &::-webkit-scrollbar-track {
    //box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--v-secondary-lighten4);
    //outline: 1px solid slategrey;
  }

  .category {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }
  @media (max-width: 768px) {
    .category {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
