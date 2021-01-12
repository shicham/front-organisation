import { find, load, save, deletes, status, type } from '../api/organisation'

const state = {
  result: {},
  results: [],
  bulkSelectedIds: [],
  selectedIds: [],
  filter: {
    size: 7,
    page: 0,
    sort: [{direction:'ASC', property:'name'}],
    id: null,
    statusOption: {},
    criteria : []
  }
}
const mutations = {
  SET_BULKSELECTEDIDS: (state, bulkSelectedIds) => {
    state.bulkSelectedIds = bulkSelectedIds
  },
  SET_SELECTEDIDS: (state, selectedIds) => {
    state.selectedIds = selectedIds
  },
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
  filter: state => state.filter,
  selectedIds: state => state.selectedIds,
  bulkSelectedIds: state => state.bulkSelectedIds
}
const actions = {
  clearResult({ commit }) {
    commit('SET_RESULT', {})
  },
  clearResults({ commit }) {
    commit('SET_RESULTS', {})
  },
  setSelectedIds({ commit }, selectedIds) {
    commit('SET_SELECTEDIDS', selectedIds)
  },
  setBulkSelectedIds({ commit }, bulkSelectedIds) {
    commit('SET_BULKSELECTEDIDS', bulkSelectedIds)
  },
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter)
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

  status({ commit }, data) {
    return new Promise((resolve, reject) => {
      status(data).then(response => {
        console.log(response)
        commit('SET_RESULT', {})
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  type({ commit }, data) {
    return new Promise((resolve, reject) => {
      type(data).then(response => {
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
        commit('SET_RESULT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  find({ commit },filter) {
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
