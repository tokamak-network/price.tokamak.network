<template>
  <div class="text-viewer">
    <div class="title">{{ title }}</div>
    <div class="content">{{ btc }} BTC</div>
    <div class="content">( {{ Math.trunc(krw).toLocaleString('en-US') }} KRW )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewerBottom',
  props: ['title', 'btc', 'krw'],
};
</script>

<style>
.text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 120px;
}
.title {
    font-weight: bold;
    font-size: 20px;
}
.content {
    font-size: 15px;
    padding: 5px;
}
</style>
