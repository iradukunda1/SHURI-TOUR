<template>
  <div class="request-tour w-100 bg-grey mb-4 pb-4">
    <div class="request-tour-context-container container px-0">
      <div class="request-tour-context row w-100 mx-0 pt-4">
        <div class="request-tour-container col-sm-8 col-md-9">
          <form class="w-100">
            <div class="nf-form-content ">
              <h2>Tell us about your school</h2>

              <div class="request-form">
                <div class="first-name-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >First Name
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control fa-14 rounded-0"
                    required="true"
                  />
                </div>
                <div class="Last-name-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >Last Name
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control fa-14 rounded-0"
                    required="true"
                  />
                </div>
                <div class="phone-area form-group">
                  <label class="font-700 fa-14 text-black-50">TELEPHONE </label>
                  <input
                    type="text"
                    class="form-control fa-14 rounded-0"
                    required="true"
                  />
                </div>
                <div class="email-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >Email
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control fa-14 rounded-0"
                    required="true"
                  />
                </div>
                <div class="school-name-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >SCHOOL NAME
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-0 fa-14"
                    required="true"
                  />
                </div>
                <div class="school-state-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >SCHOOL STATE
                    <span class="text-danger">*</span>
                  </label>
                  <select
                    class="form-control rounded-0 fa-14 cursor-pointer"
                    required="true"
                  >
                    <option
                      value="--Please select a state--"
                      selected="selected"
                      disabled
                      >--Please select a state--</option
                    >
                    <option value="ACT">ACT</option>
                    <option value="NSW">NSW</option>
                    <option value="QLD">QLD</option>
                    <option value="WA">WA</option>
                    <option value="NT">NT</option>
                    <option value="TAS">TAS</option>
                    <option value="SA">SA</option>
                    <option value="VIC">VIC</option>
                  </select>
                </div>
                <div class="school-post-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >SCHOOL POSTCODE
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-0 fa-14"
                    required="true"
                  />
                </div>
                <div class="department-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >DEPARTMENT
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-0 fa-14"
                    required="true"
                  />
                </div>
                <h2 class="py-2">Tell us about your tour</h2>
                <div class="destination-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >DESTINATION
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-0 fa-14 pointer-event"
                    required="true"
                    v-model="tour.title"
                  />
                </div>
                <div class="subject-area form-group">
                  <label class="font-700 fa-14 text-black-50">SUBJECT </label>
                  <input
                    type="text"
                    class="form-control rounded-0 fa-14"
                    required="true"
                  />
                </div>
                <div class="student-number-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >NUMBER OF STUDENTS
                  </label>
                  <input
                    type="number"
                    class="form-control rounded-0 fa-14"
                    required="true"
                  />
                </div>
                <div class="teacher-number-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >NUMBER OF TEACHERS
                  </label>
                  <input
                    type="number"
                    class="form-control fa-14 rounded-0"
                    required="true"
                  />
                </div>
                <div class="departure-date-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >PROPOSED DEPARTURE DATE
                  </label>
                  <input
                    type="date"
                    class="form-control fa-14 rounded-0"
                    required="true"
                  />
                </div>
                <div class="know-us-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >HOW DID YOU HEAR ABOUT US?
                  </label>
                  <select class="form-control rounded-0 fa-14 cursor-pointer">
                    <option value="Flyer" selected="selected">Flyer</option>
                    <option value="Email">Email</option>
                    <option value="Internet Search">Internet Search</option>
                    <option value="Previous Customer">Previous Customer</option>
                    <option value="Conference">Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="row mx-0 confirmation-area pl-4">
                  <div class="confirmation-label-container">
                    <label class="font-700 fa-14 text-black-50"
                      >How should we contact you?
                    </label>
                  </div>
                  <ul class="list-unstyled ml-2">
                    <li class="d-flex">
                      <input type="checkbox" class="rounded-0 mt-1" />
                      <label class="fa-12">E-mail</label>
                    </li>
                    <li class="d-flex">
                      <input type="checkbox" class="rounded-0 mt-1" />
                      <label class="fa-12">Phone</label>
                    </li>
                  </ul>
                </div>
                <div class="additional-information-area form-group">
                  <label class="font-700 fa-14 text-black-50"
                    >ADDITIONAL INFORMATION
                    <span class="text-danger">*</span>
                  </label>
                  <textarea
                    type="text"
                    class="form-control rounded-0 fa-14"
                    required="true"
                    style="min-height: 200px;"
                  ></textarea>
                </div>
                <div class="accept-term-area row mx-0 w-100">
                  <input
                    class="rounded-0 mt-1 mr-2"
                    type="checkbox"
                    value="1"
                    checked=""
                    required="true"
                  />
                  <p class="fa-13">
                    By completing and submitting this form you consent to our
                    <a
                      href="javascript:;;"
                      @click="
                        $router.push({ name: 'Privacy Policy' }),
                          $store.dispatch('setResources', [
                            'page_title',
                            'Privacy Policy'
                          ])
                      "
                      >privacy statement.</a
                    >
                  </p>
                </div>
                <div class="submit-form-button form-group">
                  <button
                    class="btn bg-light-green text-white w-100 fa-13 rounded-0"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="request-tour-side-bar-container col-sm-4 col-md-3">
          <div
            class="search-results-title px-3 py-3 bg-white border-bottom-4px"
          >
            <p class="fa-18">Search</p>
            <div class="search-input d-flex w-100">
              <input
                type="text"
                class="input-text px-2 fa-14 w-95 rounded-0"
                placeholder="search any tour"
              />
              <span class="bg-light-green p-2 w-15 rounded-0 cursor-pointer"
                ><i class="fas fa-search fa-14 text-white"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "request-tour",
  data() {
    return {
      tour: {}
    };
  },
  computed: {
    ...mapGetters(["resources"]),
    savedTour() {
      return this.resources.tour;
    }
  },
  mounted() {
    this.tour = { ...this.savedTour };
  }
};
</script>

<style scoped></style>
