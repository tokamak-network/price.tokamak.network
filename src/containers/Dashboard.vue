<template>
  <div>
    <div class="selector">
      <div :class="{ 'selected': currentSelector === 0 }" @click="currentSelector = 0">
        Price
      </div>
      <div :class="{ 'selected': currentSelector === 1 }"
           style="margin-left: 35px; margin-right: 35px;"
           @click="currentSelector = 1"
      >
        Supply
      </div>
    </div>
    <div v-if="loaded" class="dashbboard-container">
      <PriceContainer v-if="currentSelector === 0" />
      <SupplyContainer v-if="currentSelector === 1" :tvl="tvl" />
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
import SupplyContainer from './SupplyContainer.vue';
import PriceContainer from './PriceContainer.vue';
import moment from 'moment';
import { mapState, mapGetters } from 'vuex';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const axios = require('axios');
export default {
  name: 'Dashboard',
  components: {
    SupplyContainer,
    PriceContainer,
    // TextViewerBottom,
    // TextViewerTon,
    // TextViewerStaked,
    'loading-spinner': LoadingSpinner,
  },
  props: ['tvl'],
  data () {
    return {
      currentSelector: 0,
    };
  },
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
.selector {
  display: flex;
  margin-top: 10px;
  margin-left: 200px;
}
.selector .selected {
  color: #2a72e5;
  font-weight: 500;
}
.selector > div {
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #86929d;
}
.selector > div:hover {
  cursor: pointer;
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
