<template>
  <div class="header-container">
    <div class="header">
      <div class="header-title-container">
        <img src="@/assets/images/Tokamak_transparent.png" height="35px" width="35px">
        <div class="header-title">
          Tokamak Network Price Dashboard
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {};
</script>

<style>
html, body {
  background: #f6f8f9;
  position: relative;
  margin: 0;
  min-height: 100%;
}
.header-container {
  width: 100%;
  height: 60px;
  background: #ffffff;
  display: flex;
  justify-content: center;
}

.header {
  width: 960px;
  height: 100%;
  align-items: center;
  display: flex;
}

.header-title-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-title {
  padding-left: 10px;
  font-size: 20px;
  font-family: Helvetica;
  text-decoration: none;
  font-weight: bold;
}

.header-logo:hover {
  cursor: pointer;
}
</style>
