export const state = () => ({
  email: '',
  photoURL: '',
  displayName: '',
  token: '',
})

export const mutations = {
  login(state, data) {
    state.email = data.email
    state.photoURL = data.photoURL
    state.displayName = data.displayName
    state.token = data.token
  },
}
