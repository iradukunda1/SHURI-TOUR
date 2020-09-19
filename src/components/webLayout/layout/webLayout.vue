<template>
  <div class="web-layout-content">
    <web-nav></web-nav>
    <web-content></web-content>
    <web-footer></web-footer>
  </div>
</template>

<script>
/* eslint-disable */
import webNav from "./webNav";
import webFooter from "./webFooter";
import webContent from "./webContent";
export default {
  name: "webLayout",
  components: {
    webFooter,
    webContent,
    webNav
  },
  data() {
    return {
      mobileValue: null
    };
  },
  methods: {
    screenValue() {
      if (window.innerWidth <= 730) {
        this.mobileValue = true;
      } else {
        this.mobileValue = null;
      }
    }
  },
  created() {
    window.onresize = () => {
      this.screenValue();
    };
    window.onload = () => {
      this.screenValue();
    };
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
.web-layout-content {
  display: grid;
  padding: 0;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 142.97px 1fr auto;
  grid-template-areas:
    "navbar"
    "content"
    "footer";
  overflow-y: visible;
  font-family: "Roboto", sans-serif;
  position: absolute;

  .web-nav-layout {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
    border-bottom: 1px #d7d9de70 solid;
    grid-area: navbar;
    min-height: 15vh;
  }
  .web-content {
    grid-area: content;
    background: white;
  }
  .footer-classic {
    grid-area: footer;
  }
  .dropdown-toggle::after {
    display: none !important;
  }
  .bg-default {
    background: rgba(192, 0, 139, 0.93);
  }
  .bg-button {
    background: rgb(0, 124, 173);
  }
}
@media screen and  (max-width: 790px) {
  .web-layout-content {
    overflow-x: hidden;
    position: fixed;
  }
}
</style>
