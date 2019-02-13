const POST_PER_PAGE = 12
const MAX_POSTS_COUNT = 100

export const state = () => ({
  postToShow: [],
  page: 0,
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.postToShow = [...state.postToShow, ...posts]
  },

  INC_PAGE (state) {
    state.page += 1
  }
}

export const actions = {
  async GET_POSTS ({ commit, state }) {
    const { data } = await this.$axios.get(`/posts?_start=${state.page * POST_PER_PAGE}&_limit=${POST_PER_PAGE}`)
    commit('SET_POSTS', data)
  },

  MORE_POSTS({dispatch, commit, state}) {
    if(state.postToShow.length < MAX_POSTS_COUNT) {
      commit('INC_PAGE')
      dispatch('GET_POSTS')
    }
  }
}

