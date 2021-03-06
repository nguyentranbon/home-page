import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import titleMixin from '@/mixins/titleMixin'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueLazyload, { attempt: 2, preLoad: 1.5 })


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.mixin(titleMixin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
