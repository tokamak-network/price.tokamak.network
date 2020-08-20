import Vue from 'vue';
import App from './App.vue';

import router from './router';

// Vue.config.productionTip = false;

const isDev = process.env.NODE_ENV !== 'production';
Vue.config.performance = isDev;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
