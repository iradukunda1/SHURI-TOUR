import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";
import getters from "./getters";
import VuexPersist from "vuex-persist";
import Cookies from "js-cookie";
// import { encryptUser } from "../components/shared/service/authService";

Vue.use(Vuex);

const resourceStorage = new VuexPersist({
  key: "__resources__",
  restoreState: key => Cookies.getJSON(key),
  saveState: (key, state) =>
    Cookies.set(key, state, {
      expires: 1
    }),
  filter: mutation => mutation.type == "setResources",
  reducer: state => ({
    resources: {
      uno: state.resources
    }
  })
});
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [resourceStorage.plugin]
});
export default store;
