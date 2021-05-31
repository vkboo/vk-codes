import Vue from 'vue'
import VueWait from 'vue-wait';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueWait);
new Vue({
  router,
  store,
  wait: new VueWait({
    useVuex: true, // You must pass this option `true` to use Vuex
    vuexModuleName: 'vuex-example-module' // It's optional, `wait` by default.
  }),
  render: h => h(App)
}).$mount('#app')
