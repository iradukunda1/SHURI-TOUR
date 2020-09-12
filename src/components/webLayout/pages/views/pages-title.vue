<template>
  <div class="page-title-container w-100">
    <div class="container px-0 d-table">
      <div
        v-if="
          $route.name == 'Tour Profile' ||
            $route.name == 'Request-Tour' ||
            $route.name == 'Healthy & Safety' ||
            $route.name == 'Contact Us' ||
            $route.name == 'Privacy Policy' ||
            $route.name == 'About Us'
        "
        class="page-title-left text-white mb-0"
      >
        <h2
          class="text-truncate"
          :class="
            $route.name == 'Tour Profile' ? 'text-uppercase' : 'text-capitalize'
          "
        >
          {{ resources.page_title }}
        </h2>
      </div>
      <ul class="pull-right p-0 m-0 list-unstyled">
        <li
          class="cursor-pointer text-center text-white pr-1"
          @click="$router.push({ name: 'Home' })"
        >
          Home
        </li>
        <li
          class="small text-white text-warning mb-0"
          v-if="
            $route.name == 'Tour Profile' ||
              $route.name == 'Request-Tour' ||
              $route.name == 'Healthy & Safety' ||
              $route.name == 'Contact Us' ||
              $route.name == 'Privacy Policy' ||
              $route.name == 'About Us'
          "
        >
          {{ resources.page_title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "pages-title",
  computed: {
    ...mapGetters(["resources"])
  }
};
</script>

<style scoped lang="scss">
.page-title-container {
  min-height: 56px;
  background: #2d3e52;
  .page-title-left {
    float: left !important;
    h2 {
      line-height: 56px;
      color: #fff;
      margin: 0;
      font-weight: bold;
      font-size: 95% !important;
    }
  }
  .pull-right {
    float: right;
    height: 100%;
    li {
      font-size: 0.833em;
      font-weight: 700;
      width: fit-content;
      line-height: 56px;
      float: left;
      display: inline;
      text-transform: uppercase;
      &:nth-child(1) {
        &:hover {
          color: #194eb0 !important;
        }
      }
      &:nth-child(2) {
        &::before {
          content: "/";
          color: #5a7ca3;
        }
      }
    }
  }
}
@media screen and (max-width: 996px) {
  .page-title-container {
    .container {
      margin: 0 !important;
      padding: 0 0.5rem !important;
      .page-title-left {
        display: none !important;
      }
      .pull-right {
        li:nth-child(2) {
          font-size: 50% !important;
        }
      }
    }
  }
}
</style>
