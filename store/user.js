export const state = () => ({
  email: '',
  photoURL: '',
  displayName: '',
  token: '',
  coins:'',
  dialog:false,
})

export const mutations = {
  login(state, data) {
    state.email = data.email
    state.photoURL = data.photoURL
    state.displayName = data.displayName
    state.token = data.token
  },
  logout(state) {
    state.email = ""
    state.photoURL = ""
    state.displayName = ""
    state.token = ""
  },
  popupToggle(state){
    state.dialog=!state.dialog;
  }
}
