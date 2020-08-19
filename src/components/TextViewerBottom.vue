<template>
  <div class="text-viewer">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }} {{ unit }}</div>
  </div>
</template>

<script>
export default {
  name: 'TextViewerBottom',
  props: ['title', 'content', 'unit'],
};
</script>

<style>
.text-viewer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 30%;
  height: 150px;
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
