<template>
  <div class="tour-profile w-100 bg-grey" v-if="tour.id">{{ tour }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "tour",
  computed: {
    ...mapGetters(["resources"]),
    tour() {
      return this.resources.tour;
    }
  }
};
</script>

<style scoped></style>
