import Vue from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

Vue.use(VueGtag, {
  config: {
    id: 'G-NWVGM1KQ4L',
  },
});

import router from './router';
import store from './store';

// Vue.config.productionTip = false;
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
});

const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const isDev = process.env.NODE_ENV !== 'production';
Vue.config.performance = isDev;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
