<template>
  <div class="dashbboard-container">
    <div class="date">{{ currentTime }}</div>
    <div class="row">
      <TextViewerTon :title="'TON Price'" :KRWValue="info.trade_price" :USDValue="info.trade_price*usd" />
            <TextViewer :title="'Market Cap'" :krw="info.trade_price*50000000" :usd="50000000*info.trade_price*usd" :ton="50000000" :subTitle="'Total Supply'" :tooltip="''" />
      <TextViewerTon :title="'Trading Volume'" :KRWValue="info.acc_trade_price_24h" :USDValue="info.acc_trade_price_24h*usd" />
    </div>
    <div class="row">
      <TextViewer :title="'Market Cap'" :krw="circulatingSupply*info.trade_price" :usd="circulatingSupply*info.trade_price*usd" :ton="circulatingSupply" :subTitle="'Circulating Supply'" :tooltip="'true'" />
            <TextViewerStaked :title="'Total Staked TON'" :KRWValue="totalStaked.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })" :USDValue="((totalStaked/circulatingSupply)*100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })" />
      <TextViewerStaked :title="'Total Tradable TON'" :KRWValue="(circulatingSupply-totalStaked).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })" :USDValue="(((circulatingSupply-totalStaked)/circulatingSupply)*100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })" />

    </div>
    <div class="row">
      <TextViewerBottom :title="'Opening Price'" :krw="info.opening_price" :usd="info.opening_price*usd" />
      <TextViewerBottom :title="'Closing Price'" :krw="info.prev_closing_price" :usd="info.prev_closing_price*usd" />
      <TextViewerBottom :title="'High Price'" :krw="info.high_price" :usd="info.high_price*usd" />
      <TextViewerBottom :title="'Low Price'" :krw="info.low_price" :usd="info.low_price*usd" />
    </div>
  </div>
</template>

<script>
import TextViewer from '@/components/TextViewer.vue';
import TextViewerStaked from '@/components/TextViewerStaked.vue';
import TextViewerBottom from '@/components/TextViewerBottom.vue';
import TextViewerTon from '@/components/TextViewerTon.vue';
import moment from 'moment';

const axios = require('axios');
export default {
  name: 'Dashboard',
  components: {
    TextViewer,
    TextViewerBottom,
    TextViewerTon,
    TextViewerStaked,
  },
  props :{
  },
  data () {
    return {
      info: {
        type: Object,
      },
      btc: {
        type: Number,
      },
      usd: 0,
      circulatingSupply: 0,
      currentTime: null,
      totalStaked:0,
    };
  },
  created () {
    const moments = require('moment-timezone');
    const zoneName =  moments.tz.guess();
    const timezone = moments.tz(zoneName).zoneAbbr();
    this.currentTime = moment().format('DD/MM/YYYY hh:mm:ss ') + timezone;
    setInterval(() => this.updateCurrentTime(), 1000);
    this.getCurrencyInfo();
    setInterval(() => {this.getCurrencyInfo();}, 30000 );
    this.getUSDInfo();
    setInterval(() => {this.getUSDInfo();}, 30000 );
    this.getCirculatingSupply();
    setInterval(() => {this.getCirculatingSupply();}, 1800000 );
    setInterval(() => {this.getTotalStaked();}, 30000 );
    this.getTotalStaked();
  },
  mounted () {

  },
  methods: {
    updateCurrentTime () {
      const moments = require('moment-timezone');
      const zoneName =  moments.tz.guess();
      const timezone = moments.tz(zoneName).zoneAbbr();
      this.currentTime = moment().format('DD/MM/YYYY hh:mm:ss ') + timezone;
    },
    getCurrencyInfo () {
      axios
        .get('https://api.upbit.com/v1/ticker?markets=KRW-TON')
        .then(response => (
          this.info = JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, ''))
        ));
    },
    getUSDInfo () {
      axios
        .get('https://api.frankfurter.app/latest?from=KRW')
        .then(response => (
          this.usd = response.data.rates.USD
        ));
    },
    getCirculatingSupply () {
      axios
        .get('https://price-api.tokamak.network/circulatedcoins ')
        .then (response => {
          this.circulatingSupply = response.data;
        });
    },
    getTotalStaked () {
      axios
        .get('https://price-api.tokamak.network/staking/current')
        .then (response => {
          this.totalStaked = response.data;
        });
    },
  },
};
</script>

<style scoped>
.dashbboard-container {
  min-width: 100vw;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.date {
  font-weight: bold;
  font-size: 50px;
  padding-bottom: 20px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content:center;
}

@media screen and (max-width: 600px) {
  .dashbboard-container {
  margin-top: 10px;
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  position: relative;
}
.date {
  font-weight: bold;
  font-size: 40px;
  padding-bottom: 20px;
}
.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
}
</style>
