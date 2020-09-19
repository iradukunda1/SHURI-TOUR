<template>
  <div class="tours-list-view w-100">
    <div
      class="tour-packages w-100"
      v-for="(tour, index) in tours"
      :key="index"
    >
      <div class="tour-card-container mb-4 pb-2 row mx-0 w-100">
        <div class="tour-image col-sm-5 col-md-4 d-flex px-0">
          <img
            class="cursor-pointer"
            :src="tour.image"
            alt=""
            @mouseover="(viewImage = !viewImage), (diffIndex = index)"
          />
          <div
            class="zoomer-bg cursor-pointer d-inline-flex position-absolute"
            @mouseleave="(viewImage = !viewImage), (diffIndex = null)"
            v-if="viewImage && diffIndex == index"
          >
            <span
              class="border-2px text-white m-auto p-3 text-center rounded-circle cursor-pointer"
            >
              <i class="fas fa-plus"></i>
            </span>
          </div>
        </div>
        <div class="tour-details col-sm-7 col-md-8 py-1 pr-0">
          <div class="d-flex w-100 border-white mx-0">
            <div class="d-table-cell pb-2 pt-3 pr-3">
              <h4 class="tour-title cursor-pointer fa-16">
                {{ tour.title }}
              </h4>
              <img
                class="logo_premium"
                :class="{ 'd-none': !tour.premium }"
                :src="tour.premium ? tour.premium : ''"
              />
            </div>
            <div class="border-left-white pt-3 pb-2 ml-auto">
              <span class="price px-3"
                ><small class="mb-1">20 students + 2 teachers from</small
                >{{ tour.price }}</span
              >
            </div>
          </div>
          <div class="row w-100 mx-0 ">
            <p class="fa-13 text-black-50 col-md-8 pt-2 px-0">
              Experience: {{ tour.experience }}
            </p>
            <div class="col-md-4">
              <div
                class="view-button w-100 btn rounded-0 mt-4"
                @click="$emit('clicked', tour)"
              >
                VIEW DETAILS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-view",
  props: ["tours"],
  data() {
    return {
      diffIndex: null,
      viewImage: false
    };
  }
};
</script>

<style scoped lang="scss">
.tours-list-view {
  .tour-packages {
    .tour-card-container {
      background: #efefef !important;
      .tour-image {
        img {
          height: 160px;
          width: 100%;
          &:hover {
            //animation: zoomOut .3s ease;
            overflow-x: hidden;
          }
        }
        .zoomer-bg {
          height: 160px;
          width: 100%;
          transition: transform 0.6s ease;
          transform: rotate(180deg);
          background: rgba(29, 29, 212, 0.61);
        }
      }
    }
  }

  .border-white {
    border-bottom: 1px solid rgb(254, 255, 255) !important;
  }
  .border-left-white {
    border-left: 1px solid rgb(254, 255, 255) !important;
  }
  .tour-title {
    margin: 0;
    float: left;
    max-width: 60%;
    &:hover {
      color: #194eb0;
    }
  }
  .logo_premium {
    float: right;
    width: 20%;
    vertical-align: middle;
  }
  .price {
    color: #7db921;
    font-size: 0.8em;
    text-transform: uppercase;
    float: right;
    width: 120px;
    text-align: center;
    line-height: 1;
    display: block;
  }
  .price small {
    display: block;
    color: #838383;
    font-size: 0.8em;
    margin-bottom: 5px;
  }
  .view-button {
    font-weight: 700;
    opacity: 0.6;
    color: white;
    font-size: 0.7em;
    background: rgb(217, 217, 217);
    &:hover {
      background: rgb(152, 206, 68);
      opacity: 1;
    }
  }
}
</style>
