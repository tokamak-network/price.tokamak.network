<template>
  <div class="text-viewer-bottom">
    <div class="title">{{ title }}</div>
    <div class="content">{{ Math.trunc(krw).toLocaleString('en-US') }} KRW</div>
    <div class="content">( {{ usd.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }} USD )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewerBottom',
  props: ['title', 'usd', 'krw'],
};
</script>

<style scoped>
.text-viewer-bottom {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 5px;
  width: 20%;
  height: 110px;
}
.title {
    font-weight: bold;
    font-size: 40px;
}
.content {
    font-size: 30px;
    padding: 5px;
}

@media screen and (max-width: 600px) {
  .text-viewer-bottom {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 130px;
}
}
</style>
