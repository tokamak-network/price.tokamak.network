<template>
  <div id="app">
    <HeaderContainer />
    <div class="body-container">
      <Dashboard />
    </div>
    <FooterContainer />
  </div>
</template>

<script>
import Dashboard from '@/containers/Dashboard.vue';
import HeaderContainer from '@/containers/HeaderContainer.vue';
import FooterContainer from '@/containers/FooterContainer.vue';
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
    };
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
