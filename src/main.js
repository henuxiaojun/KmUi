import Vue from 'vue'
import App from './App'
import './style/basic/reset.scss'
import KmPlugin from './index'
Vue.use(KmPlugin)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
