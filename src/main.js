import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import willvalidate from 'willvalidate'

Vue.use(willvalidate)

Vue.config.productionTip = false
Vue.use(Vuex)
import VuexStore from './store'
const store = new Vuex.Store(VuexStore)
require('../node_modules/material-design-icons/iconfont/material-icons.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
