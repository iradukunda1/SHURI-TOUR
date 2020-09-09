<template>
  <div class="web-content">
    <div class="page-title-container w-100" v-if="$route.name !== 'Home'">
      <div class="container pt-3 px-0">
        <p v-if="$route.name == 'Tour Profile'" class="tour-name fa-18 text-white mb-0">
          {{ resources.tour.title.toUpperCase() }}
        </p>
        <ul class="row justify-content-end mx-0 w-100 px-0">
          <li
            class="cursor-pointer text-center text-white pr-1"
            @click="$router.push({ name: 'Home' })"
          >
            Home
          </li>
          <p class="fa-12 text-small text-white mb-0" v-if="$route.name == 'Tour Profile'">
            /
            <span class="text-warning pl-2">
                {{ resources.tour.title.toUpperCase() }}</span
            >
          </p>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "webContent",
  computed: {
    ...mapGetters(["resources"])
  }
};
</script>
<style>
@keyframes zoomOut {
  100% {
    transform: scale(1.2);
  }
}
.slide-right-enter-active {
  transition: all 1s ease;
}
.slide-right-leave-active {
  transition: all 1s ease;
}
.slide-right-enter {
  transform: translateX(500px);
}
.slide-right-leave-to {
  transform: translateX(500px);
}
.slide-left-enter-active {
  transition: all 1s ease;
}
.slide-left-leave-active {
  transition: all 1s ease;
}
.slide-left-enter {
  transform: translateX(-500px);
}
.slide-left-leave-to {
  transform: translateX(-500px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.check_state {
  width: 20px;
  display: inline-flex;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 4em;
  height: 4em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #fab72a;
  border-right: 1.1em solid #fab72a;
  border-bottom: 1.1em solid #fab72a;
  border-left: 1.1em solid #e74c3c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
<style scoped lang="scss">
.web-content {
  .page-title-container {
    min-height: 56px;
    background: #2d3e52;
  }
  .tour-name{
    font-weight: 600;
  }
  ul li {
    padding-right: 5px;
    list-style: none;
    font-size:.833em;
    font-weight: 700;;
    width: fit-content;
    line-height: 56px;
  }
  li:hover {
    color: #194eb0 !important;
  }
}
</style>
