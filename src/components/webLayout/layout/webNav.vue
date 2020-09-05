<template>
  <main class="main web-nav-layout d-block w-100">
    <div class="logos-container d-flex border-bottom">
      <p class="shuri-logo mb-0 py-2 mt-2">
        <span
          class="logo d-block m-auto cursor-pointer"
          :style="{
            backgroundImage: 'url(' + '/img/logos/shuri-tour.png' + ')'
          }"
        ></span>
      </p>
      <div class="platform-link d-flex my-auto mr-5">
        <p
          class="facebook-link-container cursor-pointer rounded-circle border py-1 text-center mr-4"
        >
          <span
            class="d-inline-flex text-primary"
            :style="{
              backgroundImage: 'url(' + '/img/icons/facebook.png' + ')'
            }"
          ></span>
        </p>
        <p
          class="linkedin-link-container cursor-pointer rounded-circle border py-1 text-center"
        >
          <span
            class="d-inline-flex text-primary"
            :style="{
              backgroundImage: 'url(' + '/img/icons/instagram.png' + ')'
            }"
          ></span>
        </p>
      </div>
      <div
        class="toggler-bar my-auto cursor-pointer"
        :class="{ toggle: toggleMobileSideBar }"
        @click="toggleSideBar()"
      >
        <p class="line1"></p>
        <p class="line2"></p>
        <p class="line3"></p>
      </div>
    </div>
    <div
      class="links-container m-auto"
      :class="{ 'links-container-slider': toggleMobileSideBar }"
    >
      <ul class="nav-links d-flex mx-auto">
        <li>HOME</li>
        <li>TOURS</li>
        <li>PARTNERS</li>
        <li>TEACHERS</li>
        <li>HEALTH & SAFETY</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "web-navBar",
  data() {
    return {
      toggleMobileSideBar: false
    };
  },
  methods: {
    toggleSideBar() {
      const navLinks = document.querySelectorAll(
        ".links-container .nav-links li"
      );
      this.toggleMobileSideBar = !this.toggleMobileSideBar;
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `fadeLinks 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    }
  }
};
</script>
<style>
@keyframes fadeLinks {
  from{
    opacity: 0 !important;
    transform: translateX(50px) !important;
  }
  to{
    opacity: 1 !important;
    transform: translateX(0px) !important;
  }
}
</style>
<style lang="scss" scoped>
.web-nav-layout {
  background-color: rgb(0, 85, 255);
  .logos-container {
    justify-content: space-around;
    text-align: center;
    .shuri-logo {
      flex: 1;
      .logo {
        width: 125px;
        height: 70px;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    .platform-link {
      .facebook-link-container {
        width: 30px;
        height: 30px;
        span {
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
      .linkedin-link-container {
        width: 30px;
        height: 30px;
        span {
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
    .toggler-bar {
      width: fit-content;
      height: fit-content;
      display: none;
      p {
        width: 20px;
        height: 3px;
        background-color: white;
        margin: 0.25rem;
        transition: all 0.3s ease;
      }
    }
    .toggle {
      .line1 {
        transform: rotate(-45deg) translate(-3px, 6px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: rotate(45deg) translate(-4px, -6px);
      }
    }
  }
  .links-container {
    height: 7vh;
    .nav-links {
      width: 70%;
      height: 100%;
      padding: 0;
      justify-content: space-around;
      li {
        padding-top: 1rem;
        list-style: none;
        font-weight: bold;
        font-size: 14px;
        color: aliceblue;
        cursor: pointer;
      }
    }
  }
  .links-container-slider {
    transform: translateX(0%) !important;
  }
}
@media screen and (max-width: 790px) {
  .web-nav-layout {
    .logos-container {
      border-bottom: 0 !important;
      padding: 1rem 3.5rem 0 0.5rem;
      .shuri-logo {
        .logo {
          width: 120px !important;
          height: 65px !important;
        }
      }
      .platform-link {
        display: none !important;
      }
      .toggler-bar {
        display: block !important;
      }
    }
    .links-container {
      height: calc(100vh - 106px);
      background-color: rgb(0, 85, 255);
      width: 43%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      z-index: 200;
      .nav-links {
        flex-direction: column;
        align-items: start !important;
        width: 80% !important;
        height: auto !important;
        li {
          margin-bottom: 1.5rem;
          font-size: 74% !important;
        }
      }
    }
  }
}
</style>
