<template>
  <div class="text-viewer-ton">
    <div class="title-ton">{{ title }}</div>
    <div class="content-ton">{{ Math.trunc(KRWValue).toLocaleString('en-US') }} KRW</div>
    <div class="content-ton">( {{ USDValue.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }} USD )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewerTon',
  props: ['title', 'USDValue', 'KRWValue'],
};
</script>

<style scoped>
.text-viewer-ton {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 20%;
  height: 130px;
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
/* ipad view */
@media screen and (max-width: 992px) {
  .text-viewer-ton {
  display: flex;
  flex-direction: column;
  padding: 5px;
 width: 100%;
  height: 130px;
}
}
@media screen and (max-width: 600px) {
  .text-viewer-ton {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 130px;
}
}
</style>
