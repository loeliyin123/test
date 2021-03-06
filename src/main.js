import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import {Input} from '../node_modules/element-ui';

Vue.use(Input);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
