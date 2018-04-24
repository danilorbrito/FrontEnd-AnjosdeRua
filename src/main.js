import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import AtUI from 'at-ui'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(AtUI)

import VuexStore from './store'
const store = new Vuex.Store(VuexStore)

import 'at-ui-style'  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
