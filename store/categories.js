export const state = () => ({
    categories: []
})

export const mutations = {
    add(state, categories) {
        state.categories = categories;
    },
}