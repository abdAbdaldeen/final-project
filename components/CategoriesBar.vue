<template>
  <div class="categories">
    <div v-for="category in categories" :key="category.id">
      <nuxt-link to="/AskQuestionPage">
        <v-img
          class="category"
          :src="category.Src"
          :alt="category.alt"
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
  data() {
    return {
      categories: [
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/301',
          alt: 'github',
        },
        {
          Src: 'https://picsum.photos/500/300',
          alt: 'github',
        },
      ],
    }
  },
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
