<template>
  <div class="home-page w-100 position-relative">
    <div class="subscribe-content w-100 cursor-pointer">
      <span>Subscribe to our updates including Shuri Tours</span>
    </div>
    <div class="images-slider-container d-flex position-relative w-100">
      <!--      <div class="progressive-bar">-->
      <!--        <div id="progress_bar" class="progressBar"></div>-->
      <!--      </div>-->
      <div class="slider-content d-inline-flex position-relative w-100 h-100">
        <div class="slide current">
          <img class="first-slide-image w-100 h-100" src="/img/enas.jpg" />
          <div class="air-craft-content w-100 mt-5">
            <h1 class="plane-header mb-0" @click="fadingContent()">
              WHY WE ARE DIFFERENT:
            </h1>
            <p class="pb-5">
              OUR FOCUS IS ON QUALITY EDUCATIONAL CONTENT
            </p>
            <p>
              EDUCATION PARTNERS EXCLUSIVE TO SHURI
            </p>
            <p>
              RWANDA CURRICULUM-CENTRIC PROGRAMS DEVELOPED WITH OUR EXCLUSIVE
              PARTNERS
            </p>
            <p>
              PROGRAMS DEVELOPED UNDER SUPERVISION OF SHURI TOUR CURRICULUM &
              EDUCATION ADVISOR
            </p>
            <p>
              CLASSROOM LESSONS FOR LANGUAGES & OTHER SUBJECTS
            </p>
            <p>
              LOCAL TOURS & FIELD TRIPS RELEVANT TO CLASSROOM LESSONS
            </p>
            <p>
              FLEXIBILITY TO ACCOMMODATE LEVELS, TOPICS AND REQUIRED OUTCOMES
            </p>
            <p>
              NON-LANGUAGE STUDENTS’ LESSONS CONDUCTED IN ENGLISH
            </p>
          </div>
        </div>
        <div class="slide">
          <img
            class="second-slide-image w-100 h-100"
            src="/img/internetCo.jpg"
          />
          <div class="content w-100">
            <h1 class="authentic-curricular-header">
              Authentic <br />
              cross-curricular options
            </h1>
            <p
              class="authentic-curricular-button mx-auto"
              @click="requestTour()"
              @mouseover="auto = false"
              @mouseleave="auto = true"
            >
              Request a Tour Proposal
            </p>
          </div>
        </div>
        <div class="slide">
          <img
            class="third-slide-image w-100 h-100"
            src="/img/plastic-rw.jpg"
          />
          <div class="content w-100">
            <h1 class="calibre-education-header">
              High Plastic <br />
              Educational Content
            </h1>
            <p
              class="calibre-education-button mx-auto cursor-pointer"
              @click="requestTour()"
              @mouseover="auto = false"
              @mouseleave="auto = true"
            >
              Request a Tour Proposal
            </p>
          </div>
        </div>
        <div class="slide">
          <img
            class="fourth-slide-image w-100 h-100"
            src="/img/positivo.jpg"
          />
          <div class="content w-100">
            <h1 class="innovation-header">
              Innovative Educational <br />Activities while on Tour
            </h1>
            <p class="innovation-text">
              Lessons on the Move and Outdoor Classrooms
            </p>
          </div>
        </div>
        <div class="slide">
          <img
            class="fifthy-slide-image w-100 h-100"
            src="/img/rema.jpg"
          />
          <div class="content w-100">
            <h1 class="students-benefits-header">
              Quality features <br />& benefits for Students
            </h1>
            <p
              class="students-benefits-button mx-auto cursor-pointer"
              @click="requestTour()"
              @mouseover="auto = false"
              @mouseleave="auto = true"
            >
              Request a Tour Proposal
            </p>
          </div>
        </div>
      </div>
      <div class="slider-option d-flex justify-content-between w-100">
        <button id="prev" @click="preView()">
          <i class="fas fa-arrow-left fa-13"></i>
        </button>
        <button id="next" @click="nextView()">
          <i class="fas fa-arrow-right fa-13"></i>
        </button>
      </div>
    </div>
    <div class="search-bos-wrapper w-100">
      <div class="search-tab-content mx-4">
        <form class="py-4" @submit.prevent>
          <div class="tour-search-inputs row">
            <div
              class="destination-area form-group col-sm-12 col-md-6 d-flex flex-column"
            >
              <label>Destination </label>
              <input
                type="text"
                class="input-text destination-input px-2 fa-14"
                placeholder="Enter a destination or tour name"
              />
            </div>
            <div class="form-group col-sm-12 col-md-1 or_home">
              <span class="">OR</span>
            </div>
            <div class="form-group col-sm-6 col-md-3 pt-0 type-filter-area">
              <div class="row">
                <div class="col-xs-12 w-100">
                  <label>Subject</label>
                  <div class="selector position-relative">
                    <select
                      class="w-100 tour-type-select cursor-pointer"
                      v-model="selected"
                    >
                      <option value="Tour Type" disabled selected
                        >Tour Type</option
                      >
                      <option value="All">All</option>
                      <option value="Sciences">Sciences</option>
                      <option value="Humanities">Humanities</option>
                      <option value="Languages">Languages</option>
                    </select>
                    <span class="custom-select">{{ selected }}</span>
                  </div>
                  <div class="form-group col-sm-6 col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="home-page-content bg-grey pt-5 mb-5">
<!--      <div class="education-content-container container px-0">-->
<!--        <div class="education-context row col-sm-12 mx-0">-->
<!--          <div class="education-logo-container col-sm-3 mb-3">-->
<!--            <img src="/img/logos/shuri-book-logo.png" class="w-100" />-->
<!--          </div>-->
<!--          <div class="education-context-container col-sm-9">-->
<!--            <p>-->
<!--              SHURI is different from other Tour Operators. We focus on the-->
<!--              <strong>Educational and Pedagogical content</strong> of your-->
<!--              tour.<br />-->
<!--              SHURI has invested into long-term and exclusive partnerships with-->
<!--              selected Education Centres and schools in Rwanda, Kenya, Uganda-->
<!--              and DRC Congo.<br />-->
<!--              Our local partners have developed, under our supervision, programs-->
<!--              that are specific to the Easter Africa Curriculum and to Easter-->
<!--              African Schools requirements.<br />-->
<!--              These programs are classified as-->
<!--              <strong>Premium Educational Content</strong>.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="budget-exp-content-container container px-0 py-4">-->
<!--        <div class="budget-exp-context col-sm-12 mx-0 row">-->
<!--          <div class="budget-exp-context-container col-sm-9">-->
<!--            <p>-->
<!--              <strong>New in 2019</strong>. We recognise that sometimes choices-->
<!--              can be constrained by budgets. Our<strong>-->
<!--                Budget Educational Experience</strong-->
<!--              >-->
<!--              (BEE) includes some key sites and basic accommodation and-->
<!--              transfers. You can add one or more option packs to your BEE-->
<!--              program:<br />-->
<!--              <strong>Pedagogy Pack</strong> – add a lessons pack from one of-->
<!--              our Education Partners, which include the Outdoor Classroom-->
<!--              excursions (where available)<br />-->
<!--              <strong>Excursions Pack</strong> – including guided tours,-->
<!--              additional admissions and walking tours to enhance the educational-->
<!--              content of your program<br />-->
<!--              <strong>Dinners Pack</strong> – save time and drama with all your-->
<!--              dinners pre-booked for groups and catering to your food-->
<!--              requirements/allergies<br />-->
<!--              <strong>Accommodation Upgrade Pack</strong> – Upgrade from hostels-->
<!--              to 2-3* for that extra space and convenience<br />-->
<!--              <strong>Mobile Wifi Hot Spot</strong> – Hit the ground running and-->
<!--              avoid “bill shock” with a portable Wifi Hotspot, which includes-->
<!--              25€ credit (for up to 10 devices!)-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="budget-exp-logo-container col-sm-3 h-fit mb-3">-->
<!--            <img-->
<!--              src="/img/logos/BEE-LOGO-M_-BLUE_BACKGROUND_RGB.jpg"-->
<!--              class="w-100"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="thanks-content-container container px-0">-->
<!--        <div class="thanks-context col-sm-12 row mx-0">-->
<!--          <div class="thanks-logo-container col-sm-3 mb-3">-->
<!--            <img src="/img/logos/bank.jpg" class="w-100" />-->
<!--          </div>-->
<!--          <div class="thanks-context-container col-sm-9">-->
<!--            <p>-->
<!--              We appreciate you are busy teaching and that organising an-->
<!--              overseas tour is a time-consuming task. Our range of ready-made,-->
<!--              yet flexible itineraries will save you time. We provide assistance-->
<!--              throughout the entire preparation process, from the initial quote-->
<!--              through to the day of departure.<br />-->
<!--              We work with you to deliver educational tours that will inspire a-->
<!--              love of learning in the classroom and in everyday life.<br />-->
<!--              We also offer creative solutions should you be short of numbers-->
<!--              getting that tour off the ground!<br />-->
<!--              SHURI is East African owned-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="popular-tour-content-container container mt-5 px-0">
        <div class="popular-tour-context col-sm-12 row mx-0">
          <div class="popular-tour-header row mx-0 w-100">
            <p class="font-weight-bold fa-15 tour-header">Most Popular Tours</p>
            <p class="tour-slider-option  mb-0 ml-auto d-none">
              <span
                class="prevSlideTours bg-primary cursor-pointer mr-3 py-1 px-3 text-white fa-16"
                ><i class="fas fa-arrow-left"></i
              ></span>
              <span
                class="nextSlideTours bg-primary cursor-pointer py-1 px-3 text-white fa-16"
                ><i class="fas fa-arrow-right"></i
              ></span>
            </p>
          </div>
          <div class="popular-tour-content-body pb-3 w-100">
            <div
              class="popular-tour-lists"
              v-for="(tour, index) in tours.firstSix()"
              :key="index"
            >
              <div class="popular-tour-list card bg-white pb-5">
                <div class="image-container d-flex">
                  <img
                    :src="tour.image"
                    class="tour-image cursor-pointer"
                    @mouseover="(viewImage = !viewImage), (diffIndex = index)"
                  />
                  <div
                    class="zoomer-bg cursor-pointer d-inline-flex position-absolute"
                    @mouseleave="(viewImage = !viewImage), (diffIndex = null)"
                    v-if="viewImage && diffIndex == index"
                  >
                    <span
                      class="border text-white m-auto p-3 text-center rounded-circle cursor-pointer"
                      title="zoom image"
                    >
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </div>
                <p
                  class="tour-title fa-16 text-center text-justify mx-2 border-bottom pt-3 pb-5"
                >
                  {{ tour.title }}
                </p>
                <p
                  class="tour-description fa-14 text-black-50 mx-2 py-4 border-bottom"
                >
                  {{ tour.description }}
                </p>
                <div
                  class="view-button mx-2 btn rounded-0 mt-4"
                  title="View Detail"
                  @click="tourProfile(tour)"
                >
                  VIEW DETAILS
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
import tours from "@/components/webLayout/pages/tours/tours";
export default {
  name: "home",
  data() {
    return {
      viewImage: false,
      diffIndex: null,
      intervalTime: 9000,
      auto: true,
      selected: "Tour Type",
      silderInterval: "",
      bar: {
        value: 25
      },
      tours: tours.tours
    };
  },
  methods: {
    requestTour() {
      this.$router.push({ name: "Tours" });
    },
    tourProfile(tour) {
      this.$router.push({ name: "Tour Profile", params: { id: tour.id } });
      this.$store.dispatch("setResources", ["tour", tour]);
      this.$store.dispatch("setResources", ["page_title", tour.title]);
    },
    progressBar() {
      const prg = document.querySelector(".progressBar");
      var counter = 5;
      var progress = 25;
      if (progress == 500 && counter == 100) {
        clearInterval(this.progressBar, this.intervalTime);
      } else {
        for (let i = 5; i <= 100; i++) {
          progress += 1;
          counter += 1;
          this.bar.value = progress;
        }
      }
    },
    nextView() {
      if (this.$route.name === "Home") {
        const slide = document.querySelectorAll(".slide");
        const current = document.querySelector(".current");
        if (current) {
          current.classList.remove("current");
          if (current.nextElementSibling) {
            current.nextElementSibling.classList.add("current");
          } else {
            slide[0].classList.add("current");
          }
        }
        this.resetInterval();
        setTimeout(() => current.classList.remove("current"));
      }
    },
    async preView() {
      const slide = await document.querySelectorAll(".slide");
      const current = await document.querySelector(".current");
      current.classList.remove("current");
      if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
      } else {
        slide[slide.length - 1].classList.add("current");
      }
      this.resetInterval();
      setTimeout(() => current.classList.remove("current"));
    },
    resetInterval() {
      if (this.silderInterval) {
        clearInterval(this.silderInterval);
        this.silderInterval = setInterval(this.nextView, this.intervalTime);
      }
    },
    fadingContent() {
      const paras = document.querySelectorAll(
        ".images-slider-container .slider-content .current .air-craft-content p"
      );
      paras.forEach((p, index) => {
        if (p.style.animation) {
          p.style.animation = "";
        } else {
          p.style.animation = `fadeParagraphs 500s ease forwards ${index / 9 +
            2}s`;
        }
      });
    },
    autoSlide() {
      if (this.auto) {
        this.silderInterval = setInterval(this.nextView, this.intervalTime);
        // setInterval(this.progressBar, this.intervalTime);
      }
    }
  },
  created() {
    this.autoSlide();
  },
  watch: {
    selected() {
      if (this.selected !== "Tour Type") {
        this.$router.push({ name: "Tours" });
        this.$store.dispatch("setResources", ["tour_type", this.selected]);
      }
    }
  }
};
</script>
<style>
@keyframes fadeParagraphs {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<style scoped lang="scss">
.home-page {
  .subscribe-content {
    background-color: rgb(253, 183, 20);
    text-align: center;
    color: rgb(255, 255, 255);
    padding: 0.5rem;
    box-sizing: border-box;
    font-size: 105%;
    transition: all 0.5s;
    &:hover {
      background-color: rgb(255, 255, 255);
      color: #01b7f2;
    }
  }
  .images-slider-container {
    height: 500px;
    max-height: 500px;
    .progressive-bar {
      width: 100%;
      height: 0.5rem;
      background-color: rgba(128, 128, 128, 0.55);
      border: none;
      margin: auto;
      .progressBar {
        width: 25px;
        height: inherit;
        border-radius: unset;
        background-color: dodgerblue;
      }
    }
    .slider-content {
      overflow-x: hidden;
      .slide {
        position: absolute;
        width: inherit;
        height: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        &:first-child {
          .first-slide-image {
            object-fit: cover;
          }
          .air-craft-content {
            position: absolute;
            top: 0;
            opacity: 0;
            .plane-header {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              height: auto;
              width: auto;
              color: rgb(255, 255, 255);
              white-space: nowrap;
              min-height: 0px;
              min-width: 0px;
              max-height: none;
              max-width: none;
              text-align: center;
              line-height: 40px;
              letter-spacing: 0px;
              font-weight: 900;
              font-size: 50px;
              transform-origin: 50% 50%;
              transform: translateZ(-100px);
              visibility: visible;
              opacity: 0;
            }
            p {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              color: rgb(255, 255, 255);
              margin-bottom: 0;
              text-align: center;
              line-height: 35px;
              font-weight: 900;
              font-size: 20px;
              transform-origin: 50% 50%;
              transform: translate(0px, 0px);
              visibility: visible;
              opacity: 0;
            }
          }
        }
        &:nth-child(2) {
          .second-slide-image {
            object-fit: cover;
          }
          .content {
            position: absolute;
            top: 0;
            opacity: 0;
            .authentic-curricular-header {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              color: rgb(255, 255, 255);
              text-align: center;
              line-height: 70px;
              margin: 11rem 0 4rem 0;
              font-weight: 900;
              font-size: 80px;
              transform-origin: 50% 50%;
              transform: translateZ(-100px);
              visibility: visible;
              opacity: 0;
            }
            .authentic-curricular-button {
              background-color: rgb(253, 183, 20);
              font-family: Roboto;
              cursor: pointer;
              width: fit-content;
              color: rgb(255, 255, 255);
              line-height: 17px;
              font-weight: 500;
              font-size: 17px;
              border-color: transparent;
              padding: 12px 35px;
              border-radius: 30px;
              opacity: 0;
              transform-origin: 50% 50%;
              transform: translateY(80px);
              visibility: visible;
              &:hover {
                background: rgb(255, 255, 255);
                color: rgb(253, 183, 20);
              }
            }
          }
        }
        &:nth-child(3) {
          .third-slide-image {
            object-fit: cover;
          }
          .content {
            position: absolute;
            top: 0;
            opacity: 0;
            .calibre-education-header {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              color: rgb(255, 255, 255);
              text-align: center;
              line-height: 70px;
              margin: 11rem 0 4rem 0;
              font-weight: 900;
              font-size: 80px;
              transform-origin: 50% 50%;
              transform: translateZ(-100px);
              visibility: visible;
              opacity: 0;
            }
            .calibre-education-button {
              background-color: rgb(253, 183, 20);
              font-family: Roboto;
              cursor: pointer;
              width: fit-content;
              color: rgb(255, 255, 255);
              line-height: 17px;
              font-weight: 500;
              font-size: 17px;
              border-color: transparent;
              padding: 12px 35px;
              border-radius: 30px;
              opacity: 0;
              transform-origin: 50% 50%;
              transform: translateY(80px);
              visibility: visible;
              &:hover {
                background: rgb(255, 255, 255);
                color: rgb(253, 183, 20);
              }
            }
          }
        }
        &:nth-child(4) {
          .fourth-slide-image {
            object-fit: cover;
          }
          .content {
            position: absolute;
            top: 0;
            opacity: 0;
            .innovation-header {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              color: rgb(255, 255, 255);
              text-align: center;
              line-height: 70px;
              margin: 11rem 0 4rem 0;
              font-weight: 900;
              font-size: 80px;
              transform-origin: 50% 50%;
              transform: translateZ(-100px);
              visibility: visible;
              opacity: 0;
            }
            .innovation-text {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              color: rgb(255, 255, 255);
              text-align: center;
              line-height: 10px;
              font-weight: 400;
              font-size: 25px;
              transform-origin: 50% 50%;
              opacity: 0;
              transform: translateX(-300px);
              visibility: visible;
            }
          }
        }
        &:nth-child(5) {
          .fifthy-slide-image {
            object-fit: cover;
          }
          .content {
            position: absolute;
            top: 0;
            opacity: 0;
            .students-benefits-header {
              text-shadow: rgba(0, 0, 0, 0.31) 0px 0px 10px;
              color: rgb(255, 255, 255);
              text-align: center;
              line-height: 70px;
              margin: 11rem 0 4rem 0;
              font-weight: 900;
              font-size: 80px;
              transform-origin: 50% 50%;
              transform: translateZ(-100px);
              visibility: visible;
              opacity: 0;
            }
            .students-benefits-button {
              background-color: rgb(253, 183, 20);
              font-family: Roboto;
              cursor: pointer;
              width: fit-content;
              color: rgb(255, 255, 255);
              line-height: 17px;
              font-weight: 500;
              font-size: 17px;
              border-color: transparent;
              padding: 12px 35px;
              border-radius: 30px;
              opacity: 0;
              transform-origin: 50% 50%;
              transform: translateY(80px);
              visibility: visible;
              &:hover {
                background: rgb(255, 255, 255);
                color: rgb(253, 183, 20);
              }
            }
          }
        }
      }
      .current {
        z-index: 9999;
        opacity: 1;
        &:nth-child(1) {
          .first-slide-image {
            animation: dropDownImage 1s ease-out;
          }
          .air-craft-content {
            opacity: 1;
            transition: all 0.8s ease-in-out 1s;
            .plane-header {
              transform: translateZ(0px);
              transition: all 1s ease 1.5s;
              opacity: 1;
            }
            p {
              animation: fadeParagraphs 0.5s ease-in 2.5s;
              opacity: 1;
            }
          }
        }
        &:nth-child(2) {
          .second-slide-image {
            animation: dropUpImage 2s ease-out;
          }
          .content {
            opacity: 1;
            .authentic-curricular-header {
              transform: translateZ(0px);
              transition: all 1.5s ease 2s;
              opacity: 1;
            }
            .authentic-curricular-button {
              transition: all 0.8s ease 1.5s;
              transform: translateY(0px);
              opacity: 1;
            }
          }
        }
        &:nth-child(3) {
          .third-slide-image {
            animation: dropDownImage 2s ease-out;
          }
          .content {
            opacity: 1;
            .calibre-education-header {
              transform: translateZ(0px);
              transition: all 1.5s ease 1.5s;
              opacity: 1;
            }
            .calibre-education-button {
              transform: translateY(0px);
              transition: all 0.8s ease 1.5s;
              opacity: 1;
            }
          }
        }
        &:nth-child(4) {
          .fourth-slide-image {
            animation: dropUpImage 2s ease-in-out;
          }
          .content {
            opacity: 1;
            .innovation-header {
              transform: translateZ(0px);
              transition: all 1s ease 1.2s;
              opacity: 1;
            }
            .innovation-text {
              transform: translateX(0px);
              transition: all 1.5s ease 3s;
              opacity: 1;
            }
          }
        }
        &:nth-child(5) {
          .fifthy-slide-image {
            animation: dropDownImage 2s ease-in-out;
          }
          .content {
            opacity: 1;
            .students-benefits-header {
              transform: translateZ(0px);
              transition: all 1s ease 1.5s;
              opacity: 1;
            }
            .students-benefits-button {
              transform: translateY(0px);
              transition: all 0.8s ease 1.5s;
              opacity: 1;
            }
          }
        }
      }
    }
    .slider-option {
      position: absolute;
      z-index: 9999;
      top: 50%;
      button {
        border: 1px solid darkblue;
        padding: 2px 8px;
        background-color: white;
        color: black;
        border-radius: 50%;
        margin: 0 1rem;
        outline: none;
        transition: all 0.5s;
        &:hover {
          background-color: #00ffb7;
          i {
            transition: all 0.5s ease-in 0.3s;
          }
        }
      }
    }
  }
  .or_home {
    text-align: center;
    padding-top: 30px;
  }
  .tour-type-select {
    position: absolute;
    z-index: 1;
    filter: alpha(opacity=0);
    opacity: 0;
    padding: 10px;
    background: #fff;
    border: 2px solid #eee;
    appearance: none;
    height: 40px;
    border-radius: 0;
  }
  .custom-select {
    display: inline-block;
    line-height: 32px;
    padding: 0 10px;
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 34px;
    background: #f5f5f5;
    border: none;
    &::before {
      position: absolute;
      right: 0;
      top: 0;
      content: "";
      background: #01b7f2;
      width: 24px;
      height: 100%;
    }
    &::after {
      position: absolute;
      right: 9px;
      top: 15px;
      border-top: 5px solid #fff;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      content: "";
    }
  }
  .education-context-container {
    p {
      font-size: 0.9em;
      line-height: 1.9;
      margin-bottom: 15px;
    }
  }
  .budget-exp-context-container {
    p {
      font-size: 0.9em;
      line-height: 1.9;
      margin-bottom: 15px;
    }
  }
  .thanks-context-container {
    p {
      font-size: 0.9em;
      line-height: 1.9;
      margin-bottom: 15px;
    }
  }
  .popular-tour-content-container {
    .popular-tour-context {
      .popular-tour-header {
        .tour-slider-option {
          height: fit-content;
          span {
            opacity: 0.7;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
      .popular-tour-content-body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
        grid-gap: 2rem;
        .popular-tour-list {
          transition: transform 1s;
          &:hover {
            transform: translateY(-10px);
          }
          .image-container {
            img {
              width: 100%;
              height: 12rem;
              transition: transform 0.3s ease;
              &:hover {
                overflow-x: hidden;
                transform: scale(1.2);
              }
            }
            .zoomer-bg {
              width: 100%;
              height: 12rem;
              transition: transform 0.5s ease;
              transform: rotate(180deg);
              background: rgba(29, 29, 212, 0.61);
            }
          }
          .view-button {
            font-weight: 700;
            opacity: 0.6;
            color: white;
            padding: 0 24px;
            line-height: 28px;
            font-size: 0.8em;
            background: rgb(217, 217, 217);
            &:hover {
              background: rgb(152, 206, 68);
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
@keyframes dropDownImage {
  0% {
    transform: translateY(-80px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes dropUpImage {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  100% {
    transform: translateY(-80px);
    opacity: 1;
  }
}
</style>
