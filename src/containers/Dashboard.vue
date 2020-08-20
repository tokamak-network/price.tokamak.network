<template>
  <div class="body-container">
    <div class="date">{{ currentTime }}</div>
    <div class="row">
      <TextViewerTon :title="'TON Price'" :BTCValue="info.trade_price" :KRWValue="info.trade_price*krw" />
      <TextViewerTon :title="'Trading Volume'" :BTCValue="info.acc_trade_price_24h" :KRWValue="info.acc_trade_price_24h*krw" />
    </div>
    <div class="row">
      <TextViewer :title="'Market Cap'" :krw="circulatingSupply*info.trade_price*krw" :ton="circulatingSupply" :subTitle="'(Circulating Supply)'" />
      <TextViewer :title="'Market Cap'" :krw="info.trade_price*krw*50000000" :ton="50000000" :subTitle="'(Total Supply)'" />
    </div>
    <div class="row">
      <TextViewerBottom :title="'Initial Price'" :content="info.opening_price" :unit="'BTC'" />
      <TextViewerBottom :title="'Closing Price'" :content="info.prev_closing_price" :unit="'BTC'" />
      <TextViewerBottom :title="'High Price'" :content="info.high_price" :unit="'BTC'" />
      <TextViewerBottom :title="'Low Price'" :content="info.low_price" :unit="'BTC'" />
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
      krw: {
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
    setInterval(() => {this.getCurrencyInfo();}, 3000 );
    this.getKRWInfo();
    this.getCirculatingSupply();
    setInterval(() => {this.getCirculatingSupply();}, 3000 );
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
        .get('https://api.upbit.com/v1/ticker?markets=BTC-TON')
        .then(response => (
          this.info = JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, ''))
        ));
    },
    getKRWInfo () {
      axios
        .get('https://api.upbit.com/v1/ticker?markets=KRW-BTC')
        .then(response => (
          this.krw = JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, '')).trade_price
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
.body-container {
  min-width: 960px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.date {
  font-weight: bold;
  font-size: 50px;
  padding-bottom: 50px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
/* .row {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
</style>
