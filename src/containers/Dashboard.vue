<template>
  <div>
    <div v-if="loaded" class="dashbboard-container">
      <div class="date">{{ currentTime }}</div>
      <div class="row">
        <div class="text-viewer-ton-bold">
          <div class="title-ton">TON Price</div>
          <div class="content-ton">
            {{ Math.trunc(info.trade_price).toLocaleString("en-US") }} KRW
          </div>
          <div class="content-ton">
            (
            {{
              (info.trade_price * usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            USD )
          </div>
        </div>
        <div class="text-viewer-ton-bold">
          <div class="title-ton">TOS Price</div>
          <div class="content-ton">
            {{ Math.trunc(tosprice / usd).toLocaleString("en-US") }} KRW
          </div>
          <div class="content-ton">
            (
            {{
              (tosprice).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            USD )
          </div>
        </div>
        <div class="text-viewer-market-cap">
          <div class="title-ton">Market Cap</div>
          <div class="sub-title">
            ( Total Tradable TON )
            <div />
          </div>
          <div class="content-ton">
            $
            {{
              (
                (circulatingSupply - totalStaked) *
                info.trade_price *
                usd
              ).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
          <div class="content-ton">
            {{
              (circulatingSupply - totalStaked).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            TON
          </div>
          <div class="sub-title">
            (
            {{
              (
                ((circulatingSupply - totalStaked) / (circulatingSupply + totalStakedInPhase1)) *
                100
              ).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            % of circulating supply )
          </div>
        </div>
      </div>
      <div class="row">
        <TextViewerTon
          :title="'Trading Volume'"
          :KRWValue="info.acc_trade_price_24h"
          :USDValue="info.acc_trade_price_24h * usd"
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
            ((totalStaked / (circulatingSupply + totalStakedInPhase1)) * 100).toLocaleString(
              undefined,
              {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              }
            )
          "
        />
        <TextViewer
          :title="'Market Cap'"
          :krw="info.trade_price * totalSupply"
          :usd="totalSupply * info.trade_price * usd"
          :ton="totalSupply"
          :subTitle="'Total Supply'"
          :tooltip="''"
        />
        <TextViewerStaked
          :title="'TONStarter Staked TON'"
          :KRWValue="totalStakedInPhase1.toLocaleString(undefined)"
          :USDValue="
            ((totalStakedInPhase1 / (circulatingSupply + totalStakedInPhase1)) * 100).toLocaleString(
              undefined,
              {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              }
            )
          "
        />
        <TextViewerTon
          :title="'Uniswap TVL'"
          :KRWValue="Number(tvl) / usd"
          :USDValue="Number(tvl).toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })"
          :tooltip="''"
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
  props: ['tvl'],
  computed: {
    ...mapState([
      'info',
      'btc',
      'circulatingSupply',
      'usd',
      'currentTime',
      'totalStaked',
      'totalSupply',
      'tosprice',
      'totalStakedInPhase1',
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
.text-viewer-market-cap {
  display: flex;
  flex-direction: column;
  padding: 5px;
  /* width: 30%; */
  height: 210px;
  padding-bottom: 20px;
}
.text-viewer-ton-bold {
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 210px;
  padding-bottom: 20px;
  width:20%;
  margin-left:-60px
}
.title-ton {
  font-weight: bold;
  font-size: 35px;
  padding: 5px;
}
.content-ton {
  font-size: 25px;
  padding: 5px;
}

.content {
  font-size: 25px;
  padding: 5px;
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
  .text-viewer-market-cap {
    height: 200px;
    width: 100%;
  }
  .text-viewer-ton-bold {
    height: 150px;
    width: 100%;
    margin-left: 0px
  }
}
</style>
