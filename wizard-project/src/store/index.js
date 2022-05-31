import { createStore } from 'vuex'

export default createStore({
  state: {
    userCard: {
      title: '',
      description: '',
      time: '',
      doer: '',
      apps: []
    }
  },
  getters: {
  },
  mutations: {
    addTitle(state, input) {
      state.userCard.title = input
    },
    addDescription(state, input) {
      state.userCard.description = input
    },
    addTime(state, input) {
      state.userCard.time = input
    },
    addDoer(state, input) {
      state.userCard.doer = input
    }
  },
  actions: {
  },
  modules: {
  }
})
