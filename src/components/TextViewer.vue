<template>
  <div class="text-viewer">
    <div class="title">{{ title }}</div>
    <div class="sub-title">( {{ subTitle }}
      <div v-if="tooltip !== ''" class="tooltip">
        <a href="https://medium.com/onther-tech/tokamak-network-token-economics-en-kr-97f105ef8517" target="_blank"
          rel="noopener noreferrer">
        <img src="@/assets/images/instruction.png" alt="" width="10" height="10" style="margin-top: -16px;">
        </a>
      </div>
     )</div>
     <div class="content-ton">{{ ton }} TON</div>
    <div class="content">( {{ Math.trunc(krw).toLocaleString('en-US') }} KRW )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewer',
  props: ['title', 'krw', 'subTitle', 'ton', 'tooltip'],
};
</script>

<style scoped>
.text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.content {
    font-size: 15px;
    padding: 5px;
}
.tooltip {
  padding: 0px 5px;
}
</style>
