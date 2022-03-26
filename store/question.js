export const state = () => ({
  question: {}
})

export const mutations = {
  add(state, question) {
      state.question = question;
  },
}