import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import filters from './utils/FilterDate'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  i18n,
  store,
  router,
  filters,
  render: h => h(App),
}).$mount('#app')
