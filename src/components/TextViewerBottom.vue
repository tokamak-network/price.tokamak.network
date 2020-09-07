<template>
  <div class="text-viewer">
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
.text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 20%;
  height: 130px;
}
.title {
    font-weight: bold;
    font-size: 20px;
}
.content {
    font-size: 15px;
    padding: 5px;
}

@media screen and (max-width: 600px) {
  .text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 130px;
}
}
</style>
