<template>
  <div class="text-viewer-ton">
    <div class="title-ton">{{ title }}</div>
    <div class="content-ton">{{ KRWValue }} TON</div>
    <div class="content-ton">( {{ USDValue }} % of circulating supply )</div>
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
