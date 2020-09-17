import { find, load, save, deletes } from '../api'

const state = {
  result: {},
  results: [],
  filter: {
    order: 'desc',
    pagesize: 5,
    pageindex: 5,
    id: null,
    status: {}
  }
}
const mutations = {
  SET_RESULT: (state, result) => {
    state.result = result
  },
  SET_RESULTS: (state, results) => {
    state.results = results
  },
  SET_FILTER: (state, filter) => {
    state.filter = filter
  }
}
const getters = {
  result: state => state.result,
  results: state => state.results,
  filter: state => state.filter
}
const actions = {
  clearResult({ commit }) {
    commit('SET_RESULT', {})
  },
  clearResults({ commit }) {
    commit('SET_RESULTS', {})
  },

  delete({ commit }, ids) {
    return new Promise((resolve, reject) => {
      deletes(ids).then(response => {
      console.log(response)
      commit('SET_RESULT', {})
      resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  save({ commit }, data) {
    return new Promise((resolve, reject) => {
      save(data).then(response => {
        commit('SET_RESULT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  load({ commit }, id) {
    return new Promise((resolve, reject) => {
      load(id).then(response => {
        console.log(response)
        commit('SET_RESULT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  find({ commit },filter) {
    console.log(filter)
    return new Promise((resolve, reject) => {
      find(filter).then(response => {
        commit('SET_RESULTS', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}


export default {
  isStore: true,
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
