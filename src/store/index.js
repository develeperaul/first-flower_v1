// import { store } from 'quasar/wrappers'
// import { createStore } from 'vuex'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './auth'
import cards from './cards'
import sales from './sales'
import basket from './basket'
import souvenirs from './souvenirs'


export default function () {
  const Store =  new Vuex.Store({
    modules: {
      auth,
      cards,
      sales,
      basket,
      souvenirs
    },


    strict: process.env.DEBUGGING
  })

  return Store
}
