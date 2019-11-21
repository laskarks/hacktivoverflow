import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3001',
    myQuestions: []
  },
  mutations: {
    MYQUESTIONS(state, myQuestions) {
      state.myQuestions = myQuestions
    }
  },
  actions: {
    getMyQuestions ({commit}) {
      axios({
        url: `${state.baseUrl}/questions/me`,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data})=>{
        
        commit('MYQUESTION', data)
      })
      .catch(err=> {

      })
    }
  },
  modules: {
  }
})
