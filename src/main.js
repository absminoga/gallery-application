import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
