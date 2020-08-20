<template>
  <div id="app">
    <HeaderContainer />
    <div class="body-container">
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from '@/containers/Dashboard.vue';
import HeaderContainer from '@/containers/HeaderContainer.vue';
export default {
  name: 'App',
  components: {
    Dashboard,
    HeaderContainer,
  },
  data () {
    return {
      info: null,
    };
  },
};
</script>

<style>
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
  min-width: 960px;
  max-width: 960px;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
