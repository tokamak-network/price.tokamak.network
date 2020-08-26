<template>
  <div class="dashbboard-container">
    <div class="date">{{ currentTime }}</div>
    <div class="row">
      <TextViewerTon :title="'TON Price'" :KRWValue="info.trade_price" :USDTValue="btc.trade_price*usdt" />
      <TextViewerTon :title="'Trading Volume'" :KRWValue="info.acc_trade_price_24h" :USDTValue="btc.acc_trade_price_24h*usdt" />
    </div>
    <div class="row">
      <TextViewer :title="'Market Cap'" :krw="circulatingSupply*info.trade_price" :usdt="circulatingSupply*btc.trade_price*usdt" :subTitle="'Circulating Supply'" :tooltip="'true'" />
      <TextViewer :title="'Market Cap'" :krw="info.trade_price*50000000" :usdt="50000000*btc.trade_price*usdt" :subTitle="'Total Supply'" :tooltip="''" />
    </div>
    <div class="row">
      <TextViewerBottom :title="'Opening Price'" :krw="info.opening_price" :usdt="btc.opening_price*usdt" />
      <TextViewerBottom :title="'Closing Price'" :krw="info.prev_closing_price" :usdt="btc.prev_closing_price*usdt" />
      <TextViewerBottom :title="'High Price'" :krw="info.high_price" :usdt="btc.high_price*usdt" />
      <TextViewerBottom :title="'Low Price'" :krw="info.low_price" :usdt="btc.low_price*usdt" />
    </div>
  </div>
</template>

<script>
import TextViewer from '@/components/TextViewer.vue';
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
  },
  props :{
  },
  data () {
    return {
      info: {
        type: Object,
      },
      btc: {
        type: Object,
      },
      usdt: {
        type: String,
      },
      circulatingSupply: 0,
      currentTime: null,
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
    this.getBTCInfo();
    setInterval(() => {this.getBTCInfo();}, 30000 );
    this.getUSDInfo();
    setInterval(() => {this.getUSDInfo();}, 30000 );
    this.getCirculatingSupply();
    setInterval(() => {this.getCirculatingSupply();}, 1800000 );
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
    getBTCInfo () {
      axios
        .get('https://api.upbit.com/v1/ticker?markets=BTC-TON')
        .then(response => (
          this.btc = JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, ''))
        ));
    },
    getUSDInfo () {
      axios
        .get('https://api.upbit.com/v1/ticker?markets=USDT-BTC')
        .then(response => (
          this.usdt = JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, '')).trade_price
        ));
    },
    getCirculatingSupply () {
      const now = new Date() / 1000;
      if (now >= 1597201200 && now < 1599768000){
        this.circulatingSupply = 953200;
      }
      if (now >= 1599768000 && now < 1602360000){
        this.circulatingSupply = 2756880;
      }
      if (now >= 1602360000 && now < 1604952000){
        this.circulatingSupply = 4560560;
      }
      if (now >= 1604952000 && now < 1607544000){
        this.circulatingSupply = 6364240;
      }
      if (now >= 1607544000 && now < 1610136000){
        this.circulatingSupply = 8167920;
      }
      if (now >= 1610136000 && now < 1612728000){
        this.circulatingSupply = 9971600;
      }
      if (now >= 1612728000 && now < 1615320000){
        this.circulatingSupply = 12066947;
      }
      if (now >= 1615320000 && now < 1617912000){
        this.circulatingSupply = 13914793;
      }
      if (now >= 1617912000 && now < 1620504000){
        this.circulatingSupply = 15762640;
      }
      if (now >= 1620504000 && now < 1623096000){
        this.circulatingSupply = 17610487;
      }
      if (now >= 1623096000 && now < 1625688000){
        this.circulatingSupply = 19458333;
      }
      if (now >= 1625688000 && now < 1628280000){
        this.circulatingSupply = 20000000;
      }
      if (now >= 1628280000 && now < 1630872000){
        this.circulatingSupply = 20641667;
      }
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
