<template>
  <footer class="section footer-classic text-black bg-grey w-100">
    <div
      class="row no-gutters terms-policy px-2 py-3 justify-content-center small"
    >
      <p class="pr-1 mb-0">Terms & Conditions</p>
      |
      <p class="mx-3 mb-0 privacy-policy">
        <a
          href="javascript:;;"
          @click="
            $router.push({ name: 'Privacy Policy' }),
              $store.dispatch('setResources', ['page_title', 'Privacy Policy'])
          "
          >Privacy Policy</a
        >
      </p>
      |
      <div class="rights mb-0 pl-1">
        <span>© </span><span class="copyright-year">2020</span
        ><span> SHURI - TOUR</span><span>. </span
        ><span> All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "web-footer"
};
</script>
<style lang="scss" scoped>
.footer-classic {
  .privacy-policy {
    a {
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 768px) {
}
</style>
