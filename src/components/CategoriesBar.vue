<template>
  <div class="categories">
    <div v-for="category in categories" :key="category.gID">
      <nuxt-link :to="'/g/' + category.gID">
        <v-img
          :class="(($route.params.id == category.gID) || category.isActive) ? 'Active' : 'category'"
          :src="category.imgUrl"
          :alt="category.name"
          :title="category.name"
          
        >
        </v-img>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesBar',

  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  watch: {
    '$store.state.categories.categories': {
      handler() {
        this.$forceUpdate();
      },
      immediate: true
    } 
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
  .Active {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    box-shadow: $boxShadow;
    border: 2px solid var(--v-primary-base);
  }
  @media (max-width: 768px) {
    .category {
      width: 3rem;
      height: 3rem;
    }
    .Active {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
