<template>
  <div>
    <div v-if="loaded" class="dashbboard-container">
      <div class="date">{{ currentTime }}</div>
      <div class="row">
        <div class="text-viewer-market-cap">
          <div class="title-ton">
            C1
            <div v-if="tooltip !== ''" class="tooltip">
              <img src="@/assets/images/instruction.png" alt="" width="20" height="20">
              <span class="tooltiptext" :style="`margin-left: 10px; margin-top: 5px; width: 150px;`">Maximum amount that can be traded within 2 weeks.</span>
            </div>
          </div>
          <div class="content-ton">
            {{
              (circulationSupply.C1).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            TON
          </div>
          <div class="content-ton">
            $
            {{
              (
                (circulationSupply.C1) *
                info.trade_price *
                usd
              ).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
        </div>
        <div class="text-viewer-market-cap">
          <div class="title-ton">
            C2
            <div v-if="tooltip !== ''" class="tooltip">
              <img src="@/assets/images/instruction.png" alt="" width="20" height="20">
              <span class="tooltiptext" :style="`margin-left: 10px; margin-top: 5px; width: 200px;`">Maximum amount that can be traded within 3 months.</span>
            </div>
          </div>
          <div class="content-ton">
            {{
              (circulationSupply.C1 + circulationSupply.C2).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            TON
          </div>
          <div class="content-ton">
            $
            {{
              (
                (circulationSupply.C1 + circulationSupply.C2) *
                info.trade_price *
                usd
              ).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
        </div>
        <div class="text-viewer-market-cap">
          <div class="title-ton">
            C3
            <div v-if="tooltip !== ''" class="tooltip">
              <img src="@/assets/images/instruction.png" alt="" width="20" height="20">
              <span class="tooltiptext" :style="`margin-left: 10px; margin-top: 5px; width: 200px;`">Maximum amount that can be traded within 1 year.</span>
            </div>
          </div>
          <div class="content-ton">
            {{
              (circulationSupply.C1 + circulationSupply.C2 + circulationSupply.C3).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            TON
          </div>
          <div class="content-ton">
            $
            {{
              (
                (circulationSupply.C1 + circulationSupply.C2 + circulationSupply.C3) *
                info.trade_price *
                usd
              ).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
        </div>
        <div class="text-viewer-market-cap">
          <div class="title-ton">
            C4
            <div v-if="tooltip !== ''" class="tooltip">
              <img src="@/assets/images/instruction.png" alt="" width="20" height="20">
              <span class="tooltiptext" :style="`margin-left: 10px; margin-top: 5px; width: 200px;`">Maximum amount that can be traded only after a year or more.</span>
            </div>
          </div>
          <div class="content-ton">
            {{
              (circulationSupply.C1 + circulationSupply.C2 + circulationSupply.C3 + circulationSupply.C4).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            TON
          </div>
          <div class="content-ton">
            $
            {{
              (
                (circulationSupply.C1 + circulationSupply.C2 + circulationSupply.C3 + circulationSupply.C4) *
                info.trade_price *
                usd
              ).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
        </div>
        <!-- <div class="text-viewer-market-cap">
          <div class="title-ton">Market Cap</div>
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
        </div> -->
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
    // TextViewerBottom,
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
      'circulationSupply',
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
  margin: 20px 0;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
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
  font-size: 45px;
  /* padding: 5px; */
  margin: 0 30px;
  display: flex;
  justify-content: center;
}
.tooltip {
  position: relative;
  display: inline-block;
  margin-left: 7px;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  font-size: 16px;
  text-align: center;
  padding: 7px;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.content-ton {
  font-size: 25px;
  padding: 5px;
}

.content {
  font-size: 20px;
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
