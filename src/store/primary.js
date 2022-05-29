export const state = () => ({})

export const mutations = {
  add(state, obj) {
      state[obj.key] = obj.value;
  },
}