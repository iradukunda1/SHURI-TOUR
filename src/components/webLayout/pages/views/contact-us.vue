<template>
  <div class="contact-us bg-grey w-100 mb-4">
    <img src="/img/contact.jpg" class="w-100 h-auto" />
    <div class="contact-us-context-container container px-0 py-5">
      <div class="row col-sm-12 mx-0 contact-us-context">
        <div class="col-sm-5 contact-us-address">
          <p class="text-black-50 fa-14">
            <strong>SHURI-Tour – The Educational Tour Company</strong>
          </p>
          <p class="text-black-50 fa-14">
            <strong>VIC&nbsp;office</strong>: KG 622 Street, Rugando, Kigali
            Westerwelle Start up Haus Kigali
          </p>
          <p class="text-black-50 fa-14">
            <strong>Phone:</strong> +(250)78468058
          </p>
          <p class="text-black-50 fa-14">
            <strong>Email:</strong> shuriTour@gmail.com
          </p>
        </div>
        <div class="col-sm-7 contact-us-forms">
          <form>
            <div class="full-name-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Full Name
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control fa-14 rounded-0"
                required="true"
              />
            </div>
            <div class="email-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Email
                <span class="text-danger">*</span>
              </label>
              <input
                type="email"
                class="form-control fa-14 rounded-0"
                required="true"
              />
            </div>
            <div class="phone-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Phone Number</label
              >
              <input
                type="text"
                class="form-control fa-14 rounded-0"
                required="true"
              />
            </div>
            <div class="subject-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Subject(s)</label
              >
              <input
                type="text"
                class="form-control rounded-0 fa-14"
                required="true"
              />
            </div>
            <div class="destination-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Destination
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control rounded-0 fa-14"
                required="true"
              />
            </div>
            <div class="teacher-student-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Proposed Number of Students & Teachers
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control rounded-0 fa-14"
                required="true"
              />
            </div>
            <div class="departure-date-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Proposed Date(s)
              </label>
              <input
                type="date"
                class="form-control fa-14 rounded-0"
                required="true"
              />
            </div>
            <div class="additional-information-area form-group">
              <label class="font-700 fa-14 text-black-50 text-capitalize"
                >Message
                <span class="text-danger">*</span>
              </label>
              <textarea
                type="text"
                class="form-control rounded-0 fa-14"
                required="true"
                style="min-height: 200px;"
              ></textarea>
            </div>
            <div class="accept-term-area d-flex w-100">
              <input
                class="rounded-0 mt-1 mr-2"
                type="checkbox"
                required="true"
              />
              <p class="fa-13 text-uppercase">
                BY USING THIS FORM YOU AGREE WITH THE STORAGE AND HANDLING OF
                YOUR DATA BY THIS WEBSITE. CHECK OUR
                <a
                  href="javascript:;;"
                  @click="
                    $router.push({ name: 'Privacy Policy' }),
                      $store.dispatch('setResources', [
                        'page_title',
                        'Privacy Policy'
                      ])
                  "
                  >PRIVACY POLICY </a
                >TO UNDERSTAND BETTER HOW WE HANDLE YOUR DATA
              </p>
            </div>
            <div class="submit-form-button form-group">
              <button
                class="btn bg-light-green text-white w-100 fa-13 rounded-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-us"
};
</script>

<style scoped></style>
