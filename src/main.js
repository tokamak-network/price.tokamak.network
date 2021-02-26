import Vue from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: {
    id: 'G-NWVGM1KQ4L',
  },
});

import router from './router';
import store from './store';

// Vue.config.productionTip = false;

const isDev = process.env.NODE_ENV !== 'production';
Vue.config.performance = isDev;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
