const state = {
    user_data:null
  }
   
  const getters = {
    user_data: (state, getters, rootState) => {
      return state.user_data
    }
  }
   
  const actions = {
    setCustomer: ({ commit, state }, payload) => {
      commit('SET_USER_DATA', payload)
    }
  }
   
  const mutations = {
    SET_USER_DATA(state,payload){
      state.user_data=payload
    }
    

  }
   
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }