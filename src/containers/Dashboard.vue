<template>
  <div>
    <div v-if="loaded" class="dashbboard-container">
      <div class="date">{{ currentTime }}</div>
      <div class="row">
        <TextViewerTon
          :title="'TON Price'"
          :KRWValue="info.trade_price"
          :USDValue="info.trade_price * usd"
        />
        <TextViewer
          :title="'Market Cap'"
          :krw="info.trade_price * totalSupply"
          :usd="totalSupply * info.trade_price * usd"
          :ton="totalSupply"
          :subTitle="'Total Supply'"
          :tooltip="''"
        />
        <TextViewerTon
          :title="'Trading Volume'"
          :KRWValue="info.acc_trade_price_24h"
          :USDValue="info.acc_trade_price_24h * usd"
        />
      </div>
      <div class="row">
        <TextViewer
          :title="'Market Cap'"
          :krw="circulatingSupply * info.trade_price"
          :usd="circulatingSupply * info.trade_price * usd"
          :ton="circulatingSupply"
          :subTitle="'Circulating Supply'"
          :tooltip="'true'"
        />
        <TextViewerStaked
          :title="'Total Staked TON'"
          :KRWValue="
            totalStaked.toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          "
          :USDValue="
            ((totalStaked / circulatingSupply) * 100).toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          "
        />
        <TextViewerStaked
          :title="'Total Tradable TON'"
          :KRWValue="
            (circulatingSupply - totalStaked).toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          "
          :USDValue="
            (
              ((circulatingSupply - totalStaked) / circulatingSupply) *
              100
            ).toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          "
        />
      </div>
      <div class="row">
        <TextViewerBottom
          :title="'Opening Price'"
          :krw="info.opening_price"
          :usd="info.opening_price * usd"
        />
        <TextViewerBottom
          :title="'Closing Price'"
          :krw="info.prev_closing_price"
          :usd="info.prev_closing_price * usd"
        />
        <TextViewerBottom
          :title="'High Price'"
          :krw="info.high_price"
          :usd="info.high_price * usd"
        />
        <TextViewerBottom
          :title="'Low Price'"
          :krw="info.low_price"
          :usd="info.low_price * usd"
        />
      </div>
    </div>
    <div v-else class="spinner-container">
      <loading-spinner />
    </div>
  </div>
</template>

<script>
import TextViewer from '@/components/TextViewer.vue';
import TextViewerStaked from '@/components/TextViewerStaked.vue';
import TextViewerBottom from '@/components/TextViewerBottom.vue';
import TextViewerTon from '@/components/TextViewerTon.vue';
import moment from 'moment';
import { mapState, mapGetters } from 'vuex';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const axios = require('axios');
export default {
  name: 'Dashboard',
  components: {
    TextViewer,
    TextViewerBottom,
    TextViewerTon,
    TextViewerStaked,
    'loading-spinner': LoadingSpinner,
  },
  props: {},
  computed: {
    ...mapState([
      'info',
      'btc',
      'circulatingSupply',
      'usd',
      'currentTime',
      'totalStaked',
      'totalSupply',
      'loaded',
    ]),
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
  justify-content: center;
}

.spinner-container {
  height: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
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
