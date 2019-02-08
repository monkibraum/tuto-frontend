import Vue from 'vue/dist/vue.js'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
