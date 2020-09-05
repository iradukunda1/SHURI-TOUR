// import { encryptUser } from "../components/shared/service/authService";
// import jwt_decoder from "jwt-decode";
import router from "../router/index";
import axios from "axios";

export default {
  /*------------------resources handler----------------*/

  setResources(state, data) {
      if (data[1]) state.resources[data[0]] = data[1];
  },

  view(state, data) {
    state.accessories.view = null;
    setTimeout(() => {
      state.accessories.view = data;
    });
  },
  setAccessories(state, data) {
    state.accessories[data[0]] = data[1];
  }
};
