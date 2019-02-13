import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('users/GET_USERS')
  }
}