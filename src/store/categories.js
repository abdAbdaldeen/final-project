export const state = () => ({
  categories: [],
  updated: true,
})

export const mutations = {
  add(state, categories) {
    state.categories = categories
  },
  setActive(state, id) {
    const categories = state.categories
    const cat = categories[id]
    if (!cat) {
      return
    }
    cat.isActive = true
    delete categories[id]
    state.categories = { [id]: cat, ...categories }
  },
  removeActive(state) {
    const categories = state.categories
    for (const key in categories) {
      categories[key].isActive = false
    }
    state.categories = categories
  },
}
