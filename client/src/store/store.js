import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: 'aj',
  getters: {

  },
  mutations: {
    login: state => {
      console.log('Now logged in!')
    },
    signUp: state => {
      console.log('Sign up now!')
    },
    guestLogin: state => {
      console.log('Guest login now!')
    }
  },
  actions: {
    login: context => {
      context.commit('login')
    },
    signUp: context => {
      context.commit('signUp')
    },
    guestLogin: context => {
      context.commit('guestLogin')
    }
  }
})
