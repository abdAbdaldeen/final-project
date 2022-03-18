export const state = () => ({
  token: ""
})

export const mutations = {
  login(state, token) {
      state.token = token;
  },
}