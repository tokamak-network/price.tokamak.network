<template>
  <div class="text-viewer-ton">
    <div class="title-ton">{{ title }}</div>
    <div class="content-ton">{{ BTCValue }} BTC</div>
    <div class="content0ton">( {{ Math.trunc(KRWValue).toLocaleString('en-US')}} KRW )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewerTon',
  props: ['title', 'BTCValue', 'KRWValue'],
};
</script>

<style scoped>
.text-viewer-ton {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 40%;
  height: 150px;
}
.title-ton {
    font-weight: bold;
    font-size: 25px;
    padding: 5px;
}
.content-ton {
    font-size: 15px;
    padding: 5px;
}
</style>
