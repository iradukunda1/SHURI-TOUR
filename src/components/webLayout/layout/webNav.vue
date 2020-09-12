<template>
  <main class="main web-nav-layout d-block w-100">
    <div
      class="logos-container d-flex border-bottom"
      @mouseover="showAboutDropDown = false"
    >
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
        <li
          :class="{ 'active-link': $route.name == 'Home' }"
          @click="$router.push({ name: 'Home' })"
        >
          HOME
        </li>
        <li
          :class="{ 'active-link': $route.name == 'Tours' }"
          @click="$router.push({ name: 'Tours' })"
        >
          TOURS
        </li>
        <li>PARTNERS</li>
        <li>TEACHERS</li>
        <li
          @mouseover="showAboutDropDown = false"
          :class="{ 'active-link': $route.name == 'Healthy & Safety' }"
          @click="
            $router.push({ name: 'Healthy & Safety' }),
              $store.dispatch('setResources', [
                'page_title',
                'Healthy & Safety'
              ])
          "
        >
          HEALTH & SAFETY
        </li>
        <li
          @mouseover="showAboutDropDown = !showAboutDropDown"
          :class="{
            'active-link': showAboutDropDown || $route.name == 'About Us'
          }"
          @click="closeDropDown(),
                $router.push({ name: 'About Us', hash: '#who-we-are' })"
        >
          ABOUT US
        </li>
        <li
          @mouseover="showAboutDropDown = false"
          :class="{ 'active-link': $route.name == 'Contact Us' }"
          @click="
            $router.push({ name: 'Contact Us' }),
              $store.dispatch('setResources', ['page_title', 'contact us'])
          "
        >
          CONTACT US
        </li>
      </ul>
      <div
        class="about-us-dropDown"
        @mouseleave="showAboutDropDown = !showAboutDropDown"
        v-if="showAboutDropDown"
      >
        <ul class="p-0 m-0">
          <li
            @click="
              closeDropDown(),
                $router.push({ name: 'About Us', hash: '#who-we-are' })
            "
          >
            Who we are
          </li>
          <li
            @click="
              closeDropDown(),
                $router.push({ name: 'About Us', hash: '#why-us' })
            "
          >
            Why us?
          </li>
          <li
            @click="
              closeDropDown(),
                $router.push({ name: 'About Us', hash: '#the-price-we-quote' })
            "
          >
            The price we quote
          </li>
          <li
            @click="
              closeDropDown(),
                $router.push({ name: 'About Us', hash: '#financial-security' })
            "
          >
            Financial Security
          </li>
        </ul>
      </div>
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
      toggleMobileSideBar: false,
      showAboutDropDown: false
    };
  },
  methods: {
    closeDropDown() {
      this.showAboutDropDown = !this.showAboutDropDown;
      this.$store.dispatch('setResources', ['page_title', 'about us'])
    },
    toggleSideBar() {
      const navLinks = document.querySelectorAll(
        ".links-container .nav-links li"
      );
      this.toggleMobileSideBar = !this.toggleMobileSideBar;
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fadeLinks 0.5s ease forwards ${index / 7 +
            0.5}s`;
        }
      });
    }
  }
};
</script>
<style>
@keyframes fadeLinks {
  0% {
    opacity: 0 !important;
    transform: translateX(50px) !important;
  }
  100% {
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
        padding: 1rem 0.8rem 0rem 0.8rem;
        transition: all 0.5s;
        list-style: none;
        font-weight: bold;
        font-size: 14px;
        color: aliceblue;
        cursor: pointer;
        &:hover {
          color: #fff;
          background: #40cbf8;
        }
        &:nth-child(6) {
          position: relative;
        }
      }
      .active-link {
        color: #fff;
        background: #40cbf8;
      }
    }
    .about-us-dropDown {
      position: absolute;
      z-index: 1;
      right: 21.4%;
      top: 21%;
      width: 180px;
      padding: 0;
      background: #01b7f2;
      transition: all 0.5s ease;
      ul {
        li {
          list-style: none;
          font-weight: bold;
          color: aliceblue;
          cursor: pointer;
          padding: 12px 20px 12px 18px;
          display: block;
          font-size: 0.9167em;
          opacity: 0.7;
          border-top: 1px solid #04afe7;
          &:hover {
            background: #04afe7;
            opacity: 1;
          }
        }
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
