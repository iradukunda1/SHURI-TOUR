/* eslint-disable */
import router from "@/router";

export default {
  /*--------------------------------------Resources------------------------------------*/
  setResources({ commit }, data) {
    commit("setResources", data);
  },
  setAccessories({ commit }, data) {
    commit("setAccessories", data);
  },
  setView({ commit }, data) {
    commit("view", data);
  },

};
