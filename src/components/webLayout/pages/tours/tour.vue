<template>
  <div class="tour-profile w-100 bg-grey pt-5 mb-5" v-if="tour.id">
    <div class="tour-context-container container px-0">
      <div class="content-context row w-100 mx-0">
        <div class="col-sm-12 col-md-12">
          <div class="image-box position-relative image-container">
            <img
              :src="tour.image"
              class="w-100 h-auto"
              sizes="(max-width: 2000px) 100vw, 2000px"
            />
          </div>
          <div class="travelo-box py-4 bg-white mb-3">
            <div class="entery-content">
              <div class="row mx-0">
                <p class="fa-14 col-md-12 col-sm-12">
                  <strong
                    >{{ tour.days }}-day{{ tour.days > 1 ? "s" : "" }} program
                    from Rwanda including Kigali, Butare, Musanze &amp;
                    Rwamagana</strong
                  >
                </p>
              </div>
              <div class="location-map row mx-0 col-md-12">
                <div class="map-container image-container col-md-12 col-sm-12">
                  <GmapMap
                    :center="{ lat: 1.9441, lng: 30.0619 }"
                    :zoom="4"
                    style="width: 100%; height: 300px"
                  ></GmapMap>
                </div>
              </div>
              <div class="our-difference row mx-0 col-md-12">
                <div class="difference-content-context pt-4">
                  <p class="text-center fa-14">
                    <span class="text-danger"
                      ><b
                        >WHY OUR EDUCATIONAL QUALITY FOCUSED PROGRAMS
                      </b></span
                    >
                  </p>
                  <p class="text-center fa-14">
                    <span class="text-danger"
                      ><b>ARE DIFFERENT FROM OTHER OPERATORS’</b></span
                    >
                  </p>
                  <p class="text-center fa-14">
                    <span class="text-primary"
                      ><b>BENEFITS TO STUDENTS&nbsp;</b></span
                    >
                  </p>
                  <ul>
                    <li class="li1">
                      {{ tour.days }}-day{{ tour.days > 1 ? "s" : "" }} program
                      fits into the school holidays – don’t miss any school
                    </li>
                    <li class="li1">Visit key sites across Rwanda</li>
                    <li class="li1">
                      Experience a variety of areas, ranging from cities to
                      villages, inland to coast
                    </li>
                    <li class="li1">
                      Gain a broad cultural exposure through diverse experiences
                      and opportunities
                    </li>
                    <li class="li1">
                      Authentic Cross-Curricular classes in our Pedagogy Pack,
                      with separate classes for subjects
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p class="text-center fa-14">
                    <span class="text-primary"
                      ><b>BENEFITS TO TEACHERS &amp; SCHOOL</b></span
                    >
                  </p>
                  <ul>
                    <li class="li1">
                      You are busy teaching. Send us your risk assessment
                      document and we will complete the tour section for your
                      perusal. We are familiar with our overseas venues, hotels
                      and locations and able to cover more details. This will
                      assist you with all important H&amp;S angles.
                    </li>
                    <li class="li2">
                      Join with students of another subject to create a
                      Cross-Curricular program that enables your group to
                      participate!
                    </li>
                    <li class="li2">
                      uGroop is a cloud-based administration system specifically
                      designed for teachers to help organise their program
                      through each stage of promotion, planning, recording and
                      managing on tour.
                    </li>
                    <li class="li2">
                      <b>SPECIAL</b>: for tours booked in 2019, your school will
                      receive a 100% discount membership to uGroop for that tour
                    </li>
                  </ul>
                </div>
                <div
                  class="tour-slider-image-container mb-3 d-flex position-relative"
                >
                  <div class="tour-slider-image-context position-relative">
                    <img :src="images[activeImage]" class="w-100" />
                  </div>
                  <div
                    class="tour-slider-options d-inline-flex px-4 position-absolute w-100 justify-content-between"
                  >
                    <span
                      class="border-w1 text-white text-center"
                      @click="prevSlide()"
                    >
                      <i class="fas fa-angle-left fa-13"></i>
                    </span>
                    <span
                      class="border-w1  text-white text-center"
                      @click="nextSlide()"
                    >
                      <i class="fas fa-angle-right fa-13"></i>
                    </span>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="quote-text font-italic">
                    <p>
                      <em>Itinerary&nbsp;</em
                      ><em
                        >subject to change due to flight schedules, local and
                        international holidays and other logistical factors.
                        Price may vary depending on date of departure, currency
                        exchange fluctuation, date of deposit receipt, gender
                        mix, group size, etc…</em
                      >
                      <em
                        >Flights and airport taxes not included
                        <a
                          href="javascript:;;"
                          @click="
                            $router.push({ name: 'About Us', hash: '#why-us' }),
                              $store.dispatch('setResources', [
                                'page_title',
                                'about us'
                              ])
                          "
                          >(why?)</a
                        >
                        – can be added as an option.</em
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="schedule-list col-md-12">
              <div class="schedule-container d-table mb-4 w-100">
                <div
                  class="schedule-table-cell py-2 bg-white justify-content-between row mx-0 w-100 features"
                >
                  <table class="ml-3 my-4">
                    <tbody>
                      <tr>
                        <td><p class="detail-label">Duration:</p></td>
                        <td class="fa-12 text-black-50">
                          {{ tour.days }} Day{{ tour.days > 1 ? "s" : "" }}
                        </td>
                      </tr>
                      <tr>
                        <td><p class="detail-label">Available Seats:</p></td>
                        <td class="available-seats fa-12 text-black-50">22</td>
                      </tr>
                      <tr>
                        <td><p class="detail-label">Price From:</p></td>
                        <td class="adult-price fa-12 text-black-50">
                          {{ tour.price }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    class="btn btn-primary text-white my-auto mx-3 col-md-3 rounded-0"
                    @click="request()"
                  >
                    Request a Tour Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
export default {
  name: "tour",
  data() {
    return {
      activeImage: 0,
      images: [
        "/img/china-fruits.jpg",
        "/img/blue-sea.jpg",
        "/img/ancient-egypt.jpg",
        "/img/old-palace.jpg",
        "/img/roman-statu.jpg",
        "/img/old-prison-egypt.jpg",
        "/img/birreria.jpg"
      ],
      intervalTime: 9000,
      auto: true,
      silderInterval: ""
    };
  },
  methods: {
    request() {
      this.$router.push({
        name: "Request-Tour",
        query: { tour: this.tour.title.replace(/\s/g, "-").toLowerCase() }
      });
      this.$store.dispatch("setResources", [
        "page_title",
        "request a tour proposal"
      ]);
    },
    nextSlide() {
      let imageNumber = this.images.length;
      if (
        this.activeImage < imageNumber - 1 &&
        this.activeImage !== imageNumber - 1
      ) {
        this.activeImage += 1;
      } else {
        this.activeImage = 0;
      }
      this.resetInterval();
    },
    prevSlide() {
      let imageNumber = this.images.length;
      let savedIndex = "";
      for (let index = 0; index <= imageNumber; index++) {
        if (this.activeImage == index) {
          savedIndex = index;
        }
      }
      if (savedIndex - 1 !== -1) {
        this.activeImage = savedIndex - 1;
      } else {
        this.activeImage = imageNumber - 1;
      }
      this.resetInterval();
    },
    resetInterval() {
      if (this.silderInterval) {
        clearInterval(this.silderInterval);
        this.silderInterval = setInterval(this.nextSlide, this.intervalTime);
      }
    },
    autoSlide() {
      if (this.auto) {
        this.silderInterval = setInterval(this.nextSlide, this.intervalTime);
      }
    }
  },
  computed: {
    ...mapGetters(["resources"]),
    tour() {
      return this.resources.tour;
    }
  },
  mounted() {
    this.autoSlide();
  }
};
</script>

<style scoped lang="scss">
.tour-profile {
  .tour-budget-exp-context-container {
    p {
      font-size: 0.933em;
      line-height: 1.6666;
      margin-bottom: 15px;
      opacity: 0.7;
    }
    ul {
      li {
        opacity: 0.7;
        font-size: 0.933em;
        line-height: 1.6666;
        &::before {
          font-family: "FontAwesome";
          content: "\f00c";
          color: #f00;
          margin: 0 5px 0 -15px;
        }
      }
    }
  }
  .partner-content-context {
    .p1 {
      font-size: 0.939em;
      opacity: 0.7;
      line-height: 1.6666;
    }
  }
  .difference-content-context {
    ul {
      li {
        opacity: 0.7;
        font-size: 0.933em;
        line-height: 1.6666;
        list-style: none;
        &::before {
          font-family: "FontAwesome";
          content: "\f00c";
          color: #f00;
          margin: 0 5px 0 -15px;
        }
      }
    }
  }
  .tour-slider-image-context {
    background: transparent;
    padding: 0px;
    margin: 0px auto;
    visibility: visible;
    overflow: hidden;
    height: 460px;
    transition: all 0.3s ease;
    img {
      animation: zoomOut 1.3s ease;
    }
  }
  .tour-slider-options {
    top: 48%;
    span {
      cursor: pointer;
      background: rgba(201, 201, 201, 0.75);
      width: 40px;
      height: 40px;
      &:hover {
        background: #000000;
      }
      i {
        padding-top: 0.9rem;
      }
    }
  }
  .quote-text {
    p {
      font-size: 0.9933em;
      line-height: 1.6666;
    }
  }
  .schedule-container {
    border-spacing: 15px;
    border-collapse: separate;
    table-layout: fixed;
    background: #f5f5f5;
  }
  .detail-label {
    margin-bottom: 0 !important;
    width: 110px;
    font-size: 14px;
    border-right: 1px solid #f5f5f5;
    margin-right: 20px;
    color: #194eb0;
    white-space: nowrap;
    height: 100%;
  }
}
</style>
