import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'		//消除3毫秒延迟

import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)			//对所有页面消除延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
