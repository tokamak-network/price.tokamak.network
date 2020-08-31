<template>
  <div class="header-container">
    <div class="header">
      <div class="header-title-container">
        <img src="@/assets/images/Tokamak_transparent.png" height="35px" width="35px">
        <div class="header-title">
          Tokamak Network Price Dashboard
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn" @click="showMenu">
          <img src="@/assets/images/hamburgerIcon.png">
        </button>
        <div id="myDropdown" class="dropdown-content">
          <a
            class="header-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tokamak.network"
          >What is TON?</a>
          <a
            class="header-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://upbit.com/exchange?code=CRIX.UPBIT.BTC-TON"
          >Buy TON</a>
        </div>
      </div>
      <div class="header-link-container">
        <a
          class="header-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tokamak.network"
        >What is TON?</a>
        <a
          class="header-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://upbit.com/exchange?code=CRIX.UPBIT.BTC-TON"
          style="margin-left: 48px; margin-right: 36px;"
        >Buy TON</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderContainer',
  methods: {
    showMenu () {
      document.getElementById('myDropdown').classList.toggle('show');
    },
  },
};
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
  padding-left: 5px;
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
.header-link-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-link:hover {
  color: #141414b0;
}

.header-link {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #7e8d93;
}
.dropdown {
  display: none;
  flex-direction: column;
}
@media screen and (max-width: 650px) {
  .header {
  width: 960px;
  height: 100%;
  align-items: center;
  display: flex;
  padding: 0px 10px;
}
.dropdown {
 position: relative;
  display: inline-block;
}
button:hover {
  cursor: pointer;
}
button:focus {
  outline: none;
}
.dropbtn {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  background: #ffffff;
  border: none;
  padding-left: 10px;
}
.dropdown-content {
   display: none;
   position: absolute;
   overflow: auto;
   right: 0px;
    z-index: 1;
}

.header-link-container{
  display: none;
}
.show {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 125px;
}
.header-link{
padding: 10px;
}
}
</style>
