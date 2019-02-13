export const state = () => ({
  allUsers: [],
})

export const mutations = {
  SET_USERS (state, users) {
    state.allUsers = users
  },
}

export const actions = {
  async GET_USERS ({ commit }) {
    const { data } = await this.$axios.get(`/users`)
    commit('SET_USERS', data)
  }
}

