export const state = () => ({
  question: {}
})

export const mutations = {
  add(state, question) {
      state.question = question;
  },
  addAnswer(state,answer) {
    state.question.answers[answer.aID] = answer
  }
}