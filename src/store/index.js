// import { store } from 'quasar/wrappers'
// import { createStore } from 'vuex'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './auth'

import profile from './profile'
import cards from './cards'
import sales from './sales'
import basket from './basket'
import souvenirs from './souvenirs'
import categories from './categories'


export default function () {
  const Store =  new Vuex.Store({
    modules: {
      auth,

      profile,
      cards,
      sales,
      basket,
      souvenirs,
      categories
    },


    strict: process.env.DEBUGGING
  })

  return Store
}
