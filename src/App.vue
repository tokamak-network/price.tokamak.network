<template>
  <div id="app">
    <HeaderContainer />
    <div class="body-container">
      <Dashboard :tvl="tvl" />
    </div>
    <FooterContainer />
  </div>
</template>

<script>
import Dashboard from '@/containers/Dashboard.vue';
import HeaderContainer from '@/containers/HeaderContainer.vue';
import FooterContainer from '@/containers/FooterContainer.vue';
import gql from 'graphql-tag';

export default {
  name: 'App',
  components: {
    Dashboard,
    HeaderContainer,
    FooterContainer,
  },
  data () {
    return {
      info: null,
      tvl: '',
    };
  },
  beforeCreate () {
    this.$store.dispatch('setData');
  },
  created () {
    this.$store.dispatch('updateData');
    this.getPoolInfo();
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    pools: gql`
      query pools {
      pools(where: {id: "0x1c0ce9aaa0c12f53df3b4d8d77b82d6ad343b4e4"}) {
        id
        poolDayData {
          date
          tvlUSD
        }
      }
    }`,
  },
  methods: {
    async getPoolInfo () {
      const pool = await this.$apollo.queries.pools.refetch();
      const poolData = pool.data.pools[0].poolDayData;
      this.tvl = poolData[poolData.length - 1].tvlUSD;
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}
.body-container {
  /* max-width: 960rem; */
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 670rem) {
 .body-container {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
}
</style>
