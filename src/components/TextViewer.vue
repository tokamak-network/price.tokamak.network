<template>
  <div class="text-viewer">
    <div class="title">{{ title }}</div>
    <div class="sub-title">{{ subTitle }}</div>
     <div class="content-ton">{{ ton }} TON</div>
    <div class="content">( {{ Math.trunc(krw).toLocaleString('en-US') }} KRW )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewer',
  props: ['title', 'krw', 'subTitle', 'ton'],
};
</script>

<style scoped>
.text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 30%;
  height: 150px;
}
.title {
    font-weight: bold;
    font-size: 25px;
    padding: 5px;
}
.sub-title {
    font-size: 20px;
    padding-bottom: 5px;
}
.content {
    font-size: 15px;
    padding: 5px;
}
</style>
