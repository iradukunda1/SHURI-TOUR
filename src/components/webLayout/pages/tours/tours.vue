<template>
  <div class="tours-lists w-100 pt-4 mb-5">
    <div class="tours-context-container container px-0">
      <div class="content-context row w-100 mx-0">
        <div class="tour-type-side-bar-container col-sm-4 col-md-3">
          <h4
            class="search-results-title px-3 py-3 bg-white border-bottom-4px fa-18"
          >
            <i class="fas fa-search text-warning fa-16 mr-2"></i
            ><b>{{ tours.length }}</b> results found.
          </h4>
          <div class="tours-filters">
            <div class="tours-search-container mb-1">
              <h4
                class="change-search p-3 bg-white mb-0 fa-18 cursor-pointer d-flex w-100"
                :aria-expanded="showForm ? 'true' : 'false'"
                aria-controls="collapse-1"
                @click="showForm = !showForm"
              >
                Modify Search
                <i
                  class="fas fa-plus bg-primary text-white p-1 ml-auto rounded-circle fa-12"
                  v-if="!showForm"
                ></i>
                <i
                  class="fas fa-minus bg-grey text-black p-1 ml-auto rounded-circle fa-12"
                  v-if="showForm"
                ></i>
              </h4>
              <b-collapse id="collapse-1" v-model="showForm">
                <b-card class="rounded-0 border-0 search-form">
                  <form>
                    <label>Your Destination</label>
                    <input
                      type="text"
                      class="input-text px-2 fa-14 w-100"
                      placeholder="Enter a destination or tour name"
                    />
                    <button
                      class="submit-search-button text-white w-100 border-0 text-uppercase d-flex mt-4 btn rounded-0 fa-14"
                    >
                      search again <i class="fas fa-check ml-auto pt-1"></i>
                    </button>
                  </form>
                </b-card>
              </b-collapse>
            </div>
            <div class="tours-type-options mb-2">
              <h4
                class="change-search p-3 bg-white mb-0 fa-18 cursor-pointer d-flex w-100"
                :aria-expanded="showTourTypeLists ? 'true' : 'false'"
                aria-controls="collapse-2"
                @click="showTourTypeLists = !showTourTypeLists"
              >
                Tour Type
                <i
                  class="fas fa-plus bg-primary cursor-pointer text-white p-1 ml-auto rounded-circle fa-12"
                  v-if="!showTourTypeLists"
                ></i>
                <i
                  class="fas fa-minus bg-grey cursor-pointer text-black p-1 ml-auto rounded-circle fa-12"
                  v-if="showTourTypeLists"
                ></i>
              </h4>
              <b-collapse
                id="collapse-2"
                v-model="showTourTypeLists"
                class="tour-type-lists"
              >
                <b-card class="rounded-0 border-0">
                  <p v-if="showClickedType.title" class="fa-12">
                    <span
                      @click="
                        (showClickedType.title = null),
                          ((showClickedType.department = null),
                          (showClickedType.classCode = null),
                          (showClickedType.term = null))
                      "
                      class="cursor-pointer"
                      >Home /</span
                    >
                    <span
                      v-if="showClickedType.title"
                      class="px-1"
                      @click="
                        (showClickedType.department = null),
                          (showClickedType.classCode = null)
                      "
                      :class="
                        showClickedType.title && !showClickedType.department
                          ? 'text-warning pointer-event'
                          : 'cursor-pointer'
                      "
                      >{{ showClickedType.title }}</span
                    >
                    <span
                      @click="showClickedType.classCode = null"
                      v-if="showClickedType.department"
                      class="pr-1"
                      :class="
                        showClickedType.department && !showClickedType.classCode
                          ? 'text-warning pointer-event'
                          : 'cursor-pointer'
                      "
                      >/ {{ showClickedType.department }}</span
                    >
                    <span
                      v-if="showClickedType.classCode"
                      @click="showClickedType.term = null"
                      :class="
                        showClickedType.classCode && !showClickedType.term
                          ? 'text-warning pointer-event'
                          : 'cursor-pointer'
                      "
                      >/ {{ showClickedType.classCode }}</span
                    >
                  </p>
                  <ul class="tour-type-option list-unstyled m-0 p-0">
                    <li
                      class="fa-13 cursor-pointer mb-1 p-2 bg-grey text-black w-100"
                      v-if="!showClickedType.title"
                    >
                      All
                    </li>
                    <div v-if="!showClickedType.title">
                      <li
                        v-for="(type, index) in tourTypes"
                        :key="index"
                        class="fa-13 cursor-pointer mb-1 p-2 bg-grey text-black w-100 d-flex"
                        @click="typeClicked(type)"
                      >
                        <span>{{ type.title }} </span>
                      </li>
                    </div>
                    <div
                      v-if="
                        showClickedType.title && !showClickedType.department
                      "
                    >
                      <li
                        v-for="(department,
                        index) in savedDepartments.department"
                        :key="index"
                        class="fa-13 cursor-pointer mb-1 p-2 bg-grey text-black w-100 d-flex"
                        @click="departmentClicked(department.name)"
                      >
                        <span>{{ department.name }} </span>
                      </li>
                    </div>
                    <div
                      v-if="
                        showClickedType.department && !showClickedType.classCode
                      "
                    >
                      <li
                        v-for="(classroom, index) in savedClassrooms"
                        :key="index"
                        class="fa-13 cursor-pointer mb-1 p-2 bg-grey text-black w-100 d-flex"
                        @click="classroomClicked(classroom.classCode)"
                      >
                        <span>{{ classroom.classCode }} </span>
                      </li>
                    </div>
                    <div v-if="showClickedType.classCode">
                      <li
                        v-for="(term, index) in savedTerms"
                        :key="index"
                        class="fa-13 cursor-pointer mb-1 p-2 bg-grey text-black w-100 d-flex"
                      >
                        <span>{{ term }} </span>
                      </li>
                    </div>
                  </ul></b-card
                >
              </b-collapse>
            </div>
          </div>
        </div>
        <div class="tours-list-container col-sm-8 col-md-9">
          <list-view :tours="tours" @clicked="handleTourClicked" />
          <ul class="page-numbers list-unstyled row mx-0">
            <li class="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>Next</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ListView from "@/components/webLayout/pages/tours/list-view";
import tours from "@/components/webLayout/pages/tours/tours";
export default {
  name: "tours",
  components: { ListView },
  data() {
    return {
      showForm: false,
      showTourTypeLists: false,
      tours: tours.tours,
      showClickedType: {
        title: null,
        department: null,
        classCode: null,
        term: null
      },
      savedDepartments: {},
      savedClassrooms: [],
      savedTerms: [],
      tourTypes: [
        {
          title: "Sciences",
          department: [
            {
              name: "PCB",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "MCB",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "PCM",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "BCG",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "MEG",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "MPG",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "MCE",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "MPC",
              classrooms: [
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            }
          ]
        },
        {
          title: "Languages",
          department: [
            {
              name: "LFK",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "LKK",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "LKF",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            }
          ]
        },
        {
          title: "Humanities",
          department: [
            {
              name: "HEG",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "HEL",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "LEG",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "HGL",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "REHL",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            },
            {
              name: "REHG",
              classrooms: [
                { classCode: "s04", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s05", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s06", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] },
                { classCode: "s03", terms: ["1ST TERM", "2ND TERM", "3RD TERM"] }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    typeClicked(type) {
      this.showClickedType.title = type.title;
      this.filteredDepartment(type);
    },
    filteredDepartment(type) {
      for (let i = 0; i < this.tourTypes.length; i++) {
        if (this.tourTypes[i].title === type.title) {
          this.savedDepartments = { ...this.tourTypes[i] };
        }
      }
    },
    departmentClicked(data) {
      this.showClickedType.department = data;
      this.filterClassroom(data);
    },
    filterClassroom(data) {
      for (let i = 0; i < this.savedDepartments.department.length; i++) {
        if (this.savedDepartments.department[i].name === data) {
          this.savedClassrooms = {
            ...this.savedDepartments.department[i].classrooms
          };
        }
      }
    },
    classroomClicked(data) {
      this.showClickedType.classCode = data;
      this.filterTerms(data);
    },
    filterTerms(data) {
      var size = Object.keys(this.savedClassrooms).length;
      for (let i = 0; i < size; i++) {
        if (this.savedClassrooms[i].classCode === data) {
          this.savedTerms = {
            ...this.savedClassrooms[i].terms
          };
        }
      }
    },
    handleTourClicked(tour) {
      this.$router.push({ name: "Tour Profile", params: { id: tour.id } });
      this.$store.dispatch("setResources", ["tour", tour]);
      this.$store.dispatch("setResources", ["page_title", tour.title]);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.tours-lists {
  min-height: 400px;
  text-align: left;
  background: #f5f5f5;
  .change-search {
    outline: none;
    &:hover {
      color: rgba(100, 100, 234, 0.5);
    }
  }
  .submit-search-button {
    background: rgb(152, 206, 68);
    &:hover {
      background: rgb(127, 178, 49);
    }
  }
  .tour-type-option {
    li {
      list-style: none;
      width: fit-content;
      animation: fade 0.3s ease;
      &:hover {
        color: #194eb0 !important;
      }
    }
  }
  .page-numbers {
    li {
      float: left;
      height: 32px;
      margin-right: 6px;
      text-align: center;
      font-size: 0.9167em;
      line-height: 32px;
      padding: 0 10px;
      color: #fff;
      border-radius: 0 !important;
      background: #d9d9d9;
      border: none;
      text-transform: uppercase;
      font-weight: 700;
      position: relative;
      cursor: pointer;
      margin-left: -1px;
      &:hover {
        color: #fff;
        background: #01b7f2;
      }
    }
    .active {
      color: #fff;
      background: #01b7f2 !important;
    }
  }
}
</style>
