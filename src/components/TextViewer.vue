<template>
  <div class="text-viewer">
    <div class="title">{{ title }}</div>
    <div v-if="tooltip !== ''" class="sub-title">
      ( {{ subTitle }}
      <div class="tooltip">
        <a href="https://medium.com/onther-tech/tokamak-network-token-economics-en-kr-97f105ef8517" target="_blank"
           rel="noopener noreferrer"
        >
          <img src="@/assets/images/instruction.png" alt="" width="10" height="10" style="margin-top: -16px;">
        </a>
      </div>
      <div> )</div>
    </div>
    <div v-else class="sub-title"> ( {{ subTitle }} )</div>
    <div class="content">{{ Math.trunc(ton).toLocaleString('en-US') }} TON </div>
    <div class="content-ton">( {{ usd.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }} USD )</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewer',
  props: ['title', 'krw', 'subTitle', 'usd', 'tooltip', 'ton'],
};
</script>

<style scoped>
.text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 20%;
  height: 190px;
  padding-bottom: 20px;
}
.title {
    font-weight: bold;
    font-size: 25px;
    padding: 5px;
}
.sub-title {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
     margin-bottom:10px;
}
.content-ton {
    font-size: 15px;
    padding: 5px;
}
.content {
   padding: 5px;
}
.tooltip {
  padding: 0px 5px;
}

/* ipad view */
@media screen and (max-width: 992px) {
  .text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
 width: 100%;
  height: 190px;
}
}

@media screen and (max-width: 600px) {
  .text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 190px;
}
}
</style>
