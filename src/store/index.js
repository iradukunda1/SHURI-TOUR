import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";
import getters from "./getters";
// import { encryptUser } from "../components/shared/service/authService";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
export default store;
