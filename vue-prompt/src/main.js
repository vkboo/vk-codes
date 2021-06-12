import Vue from 'vue'
import App from './App.vue'
import Prompt from '@/components/Prompt/main.js';

Vue.config.productionTip = false

Vue.use(Prompt);

new Vue({
  render: h => h(App),
}).$mount('#app')
