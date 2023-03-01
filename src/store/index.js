import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const moments = require('moment-timezone');
const axios = require('axios');
import moment from 'moment';
import { ethers } from 'ethers';

export default new Vuex.Store({
  state: {
    info: {},
    loaded: false,
    btc: {},
    usd: 0,
    circulatingSupply: 0,
    circulationSupply: {},
    currentTradableTON: 0,
    tradableAfter2WeeksTo3Months: 0,
    tradableAfter1year: 0,
    tradableAfter3years: 0,
    currentTime: null,
    totalStaked: 0,
    totalSupply: 0,
    totalStakedInPhase1: 0,
    tosprice: 0,
    title: 'Tokamak Network Price Dashboard',
  },
  mutations: {
    SET_CURRENT_TIME: (state, time) => {
      state.currentTime = time;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
    SET_TITLE: (state, title) => {
      state.title = title;
    },
    SET_BTC: (state, btc) => {
      state.btc = btc;
    },
    SET_LOADED: (state, loaded) => {
      state.loaded = loaded;
    },
    SET_CIRCULATINGSUPPLY: (state, circulatingSupply) => {
      state.circulatingSupply = circulatingSupply;
    },
    SET_TOSPRICE_USD: (state, tosprice) => {
      state.tosprice = tosprice;
    },
    SET_TOTALSTAKED_IN_PHASE1: (state, totalStaked) => {
      state.totalStakedInPhase1 = totalStaked;
    },
    SET_TOTALSTAKED: (state, totalStaked) => {
      state.totalStaked = totalStaked;
    },
    SET_TOTALSUPPLY: (state, totalSupply) => {
      state.totalSupply = totalSupply;
    },
    SET_CIRCULATIONSUPPLY: (state, circulationSupply) => {
      state.circulationSupply = circulationSupply;
    },
    SET_USD: (state, usd) => {
      state.usd = usd;
    },
  },
  actions: {
    // setData (context) {
    //   context.dispatch('updateCurrentTime');
    // },
    setCurrentTime (context) {
      const moments = require('moment-timezone');
      const zoneName = moments.tz.guess();
      const timezone = moments.tz(zoneName).zoneAbbr();
      const currentTime = moment().format('DD/MM/YYYY hh:mm:ss ') + timezone;
      context.commit('SET_CURRENT_TIME', currentTime);
    },
    async setData (context) {
      await Promise.all([
        context.dispatch('setCurrentTime'),
        context.dispatch('getCurrencyInfo'),
        context.dispatch('getUSDInfo'),
        context.dispatch('getCirculatingSupply'),
        context.dispatch('getTotalStaked'),
        context.dispatch('getTotalSupply'),
        context.dispatch('getStakedData'),
        context.dispatch('getCurrentTosPrice'),
        context.dispatch('getCirculationSupply'),
      ]);

      context.dispatch('setLoaded');
      const info = await context.state.info.trade_price;
      const title = Math.trunc(info).toLocaleString('en-US') + ' TON/KRW';
      document.title = title;
    //   if (context.state.info !== {}) {
    //     context.commit('SET_LOADED', true);
    //   }
    },
    updateData (context) {
      setInterval(() => context.dispatch('setCurrentTime'), 1000);
      setInterval(() => context.dispatch('getCurrencyInfo'), 60000);
      setInterval(() => context.dispatch('getUSDInfo'), 60000);
      setInterval(() => context.dispatch('getCirculatingSupply'), 60000);
      setInterval(() => context.dispatch('getTotalStaked'), 60000);
      setInterval(() => context.dispatch('getTotalSupply'), 60000);
      setInterval(() => context.dispatch('getCurrentTosPrice'), 60000);
      setInterval(() => context.dispatch('getCirculationSupply'), 60000);
    },
    async getPoolData (context) {

    },
    async getStakedData (context) {
      await axios.get('https://tonstarterapi.tokamak.network/v1/stakecontracts?chainId=1').then(response => {
        const stakeList = response.data.datas;
        let total = 0;

        stakeList.map(data => {
          total += Number(ethers.utils.formatUnits(data.totalStakedAmountString, 18));
        });
        context.commit('SET_TOTALSTAKED_IN_PHASE1', total);
      });
    },
    async getCurrencyInfo (context) {
      await axios
        .get('https://api.upbit.com/v1/ticker?markets=KRW-TON')
        .then(response => {

          context.commit(
            'SET_INFO',
            JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, '')),
          );
          if(context.state.loaded){
            document.title  =  Math.trunc(response.data[0].trade_price).toLocaleString('en-US') + ' TON/KRW';

          }
        }   ); },
    async getUSDInfo (context) {
      await axios
        .get('https://api.frankfurter.app/latest?from=KRW')
        .then((response) => context.commit('SET_USD', response.data.rates.USD));
    },
    async getCirculationSupply (context) {
      await axios
        .get('https://price-api.tokamak.network/circulationSupply')
        .then((response) => {
          context.commit('SET_CIRCULATIONSUPPLY', response.data);
        });
    },

    async getCurrentTosPrice (context) {
      await axios.get('https://price-api.tokamak.network/tosprice')
        .then((response) => {
          context.commit('SET_TOSPRICE_USD', response.data);
        });
    },
    async getCirculatingSupply (context) {
      await axios
        .get('https://price-api.tokamak.network/circulatedcoins ')
        .then((response) => {
          context.commit('SET_CIRCULATINGSUPPLY', response.data);
        });
    },
    async getTotalStaked (context) {
      await axios
        .get('https://price-api.tokamak.network/staking/current')
        .then((response) => {
          context.commit('SET_TOTALSTAKED', response.data);
        });
    },
    async getTotalSupply (context) {
      await axios
        .get('https://price-api.tokamak.network/totalsupply')
        .then((response) => {
          context.commit('SET_TOTALSUPPLY', response.data);
        });
    },
    async setLoaded (context) {
      await context.commit('SET_LOADED', true);
    },
  },
  getters: {},
});
