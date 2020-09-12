<template>
  <div class="about-us bg-grey w-100 mb-4 pb-4">
    <div class="about-us-context-container container px-0 py-5">
      <div class="row mx-0 col-sm-12 col-md-12">
        <div class="col-md-3">
          <div
            class="search-results-title px-2 py-4 bg-white border-bottom-4px"
          >
            <div class="search-input d-flex w-100">
              <input
                type="text"
                class="input-text px-2 fa-14 w-85 rounded-0"
                placeholder="search any tour"
              />
              <span class="bg-light-green p-2  rounded-0 cursor-pointer"
                ><i class="fas fa-search fa-14 text-white"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="col-md-9 py-3">
          <div class="about-us-content border rounded">
            <div class="who-we-are-panel" id="who-we-are">
              <div class="panel-heading">
                <p
                  class="mb-0 cursor-pointer fa-13 text-black-50 px-3 py-2"
                  @click="$router.push({ hash: '#who-we-are' })"
                >
                  <i
                    class="fas fa-plus fa-13"
                    v-if="$route.hash !== '#who-we-are'"
                  ></i>
                  <i
                    class="fas fa-minus fa-13"
                    v-if="$route.hash == '#who-we-are'"
                  ></i
                  ><i class="fas fa-13 fa-question-circle px-2"></i
                  ><span>Who we are</span>
                </p>
              </div>
              <div
                class="border-top"
                :class="{ 'border-bottom pt-3': $route.hash == '#who-we-are' }"
              >
                <div v-if="$route.hash == '#who-we-are'" class="px-3">
                  <p><strong>We are Rwanda owned and focused</strong></p>
                  <p>
                    As an Rwandan based and owned company, we have been and
                    continue to develop our programs to align with the Rwanda
                    curriculum (topics, key learning areas and outcomes).
                  </p>
                  <p>
                    We provide personalised service and tailor our tours to your
                    school’s needs as we understand the Rwanda perspective.
                  </p>
                </div>
              </div>
            </div>
            <div class="why-us-panel" id="why-us">
              <div class="panel-heading">
                <p
                  class="mb-0 cursor-pointer fa-13 text-black-50 px-3 py-2"
                  @click="$router.push({ hash: '#why-us' })"
                >
                  <i class="fas fa-plus" v-if="$route.hash !== '#why-us'"></i>
                  <i class="fas fa-minus" v-if="$route.hash == '#why-us'"></i
                  ><i class="fa fa-street-view px-2"> </i><span>Why us?</span>
                </p>
              </div>
              <div
                class="border-top"
                :class="{ 'border-bottom pt-3': $route.hash == '#why-us' }"
              >
                <div v-if="$route.hash == '#why-us'" class="px-3">
                  <p><strong>We focus on Educational Study Tours</strong></p>
                  <p>
                    We continue to expand our programs into new regions and
                    countries. We are not trying to wedge your group into the
                    normal retail holiday tours. We are specialist in
                    educational tours for Rwanda school students.
                  </p>
                  <p><strong>We have the experience</strong></p>
                  <p>
                    Our Team members bring a vast and diverse experience in the
                    Travel and Educational fields. Our tours are carefully
                    designed to bring the learning experience to life. We take
                    the pressure off you.
                  </p>
                  <p><strong>We think differently</strong></p>
                  <p>
                    We think outside the box and have different ways to maximise
                    the chances of your tour getting off the ground. Do talk to
                    us even if you do not have the minimum number of students
                    required for a group.
                  </p>
                  <p><strong>We innovate</strong></p>
                  <p>
                    At SHURI TOUR, we plan tours from the first moment you land
                    to create engaging, fun, relevant and
                    <em>educational</em> experiences for your students. You can
                    have optional classes with fully qualified teachers which
                    can incorporate your excursions (<strong
                      ><em>Outdoor Classrooms</em></strong
                    >). We have done the research to create study notes for some
                    excursions (<strong><em>Lessons on the Move</em></strong
                    >). We look for relevant excursions for your subject, not
                    just the usual tourist haunts.
                  </p>
                </div>
              </div>
            </div>
            <div class="the-price-we-quote" id="the-price-we-quote">
              <div class="panel-heading">
                <p
                  class="mb-0 cursor-pointer fa-13 text-black-50 py-2 px-3"
                  @click="$router.push({ hash: '#the-price-we-quote' })"
                >
                  <i
                    class="fas fa-plus"
                    v-if="$route.hash !== '#the-price-we-quote'"
                  ></i
                  ><i
                    class="fas fa-minus"
                    v-if="$route.hash == '#the-price-we-quote'"
                  ></i
                  ><i class="fas fa fa-usd px-2"></i
                  ><span>The Price We Quote</span>
                </p>
              </div>
              <div
                class="the-price-we-quote-content border-top "
                :class="{
                  'border-bottom pt-3': $route.hash == '#the-price-we-quote'
                }"
              >
                <div v-if="$route.hash == '#the-price-we-quote'" class="px-3">
                  <p>
                    The price quoted for your trip is based on the expected
                    number of paying participants at the time of booking. If
                    take-up numbers fall below the minimum requirement, the
                    price of your trip may increase.
                  </p>
                  <p>
                    Please refer to our
                  </p>
                  <p>
                    <strong>Factors that affect the cost of your tour</strong>
                  </p>
                  <p>
                    School organisers are often surprised that the costs of
                    tours are steadily increasing each year. There are
                    unavoidable increases that can affect your budget,
                    especially if you have based your forward estimate on a past
                    tour quote that may be 2-3 years old. Here are the top 3
                    factors that affect the costs of your tour:
                  </p>
                  <p>
                    Exchange rates – the Rwandan Francas can fluctuate
                    significantly due to world events and political situations.
                  </p>
                  <p>
                    International Tourist Demands – every season the number of
                    international travellers grows: it has doubled from 669mil
                    to 1.235bil from 2000 to 2012 and continues to grow, so your
                    group needs to book as far in advance as possible.
                  </p>
                  <p>
                    <strong>Why are airfares not included in the quote?</strong>
                  </p>
                  <p>
                    Teachers/organisers are entitled to cost visibility and
                    clarity. To that end, SHURI provides a cost for the land
                    content alone.
                  </p>
                  <p>
                    We give you the option to shop around for flights and source
                    airfares from your local retail agent. We can also provide
                    flights to match your tour requirements with the best value
                    and least travel disruption.
                  </p>
                  <p>The choice is yours!</p>
                  <p><strong>Baggage Allowance on airlines&nbsp;</strong></p>
                  <p>
                    Remember that an international flight includes one 20kg
                    checked luggage item per person (except for music bands
                    which usually have extra allowance for musical instruments).
                    Please check your quotation carefully. Any additional
                    luggage is charged by the airline at check in.
                  </p>
                </div>
              </div>
            </div>
            <div class="financial-security" id="financial-security">
              <div class="panel-heading">
                <p
                  class="mb-0 px-3 cursor-pointer fa-13 text-black-50 py-2"
                  @click="$router.push({ hash: '#financial-security' })"
                >
                  <i
                    class="fas fa-plus"
                    v-if="$route.hash !== '#financial-security'"
                  ></i
                  ><i
                    class="fas fa-minus"
                    v-if="$route.hash == '#financial-security'"
                  ></i
                  ><i class=" fa fa-check-square px-2"></i
                  ><span>Financial security</span>
                </p>
              </div>
              <div
                :class="{
                  'border-top': $route.hash == '#financial-security'
                }"
              >
                <div v-if="$route.hash == '#financial-security'" class="px-3">
                  <p>
                    SHURI is fully insured with QBE Business Insurance including
                    cover for money paid by our clients. A Certificate of
                    Currency can be obtained from QBE at any time. School
                    payments are received directly into our Trust Account.
                  </p>
                  <p>
                    School groups must have travel insurance and if your school
                    insurance does not cover your group, we can provide Group
                    Travel Cover through QBE-NIB travel insurance.
                  </p>
                  <p>
                    We design quality Educational Tours which are delivered to
                    Schools using a combination of services from Rwanda and
                    overseas travel agents, Inbound Operators and airlines
                    partners, all of them licensed and long established in their
                    respective fields of expertise.
                  </p>
                  <p>
                    Shuri – Tour Company ( KG 622 Street, Rugando, Kigali
                    Westerwelle Start up Haus Kigali )
                  </p>
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
export default {
  name: "about-us",
  mounted() {}
};
</script>

<style scoped lang="scss">
.about-us {
  .panel-heading {
    &:hover {
      background-color: #f0f0f0;
    }
  }
  p {
    font-size: 0.833em;
    line-height: 1.6666;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.5) !important;
  }
}
</style>
