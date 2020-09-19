import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import filters from './utils/FilterDate'
import Filter from './utils/Filter'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('v-select', vSelect)

new Vue({
  i18n,
  store,
  router,
  filters,
  Filter,
  render: h => h(App),
}).$mount('#app')
