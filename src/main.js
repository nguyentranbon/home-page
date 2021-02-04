import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import titleMixin from '@/plugins/titleMixin'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.mixin(titleMixin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
