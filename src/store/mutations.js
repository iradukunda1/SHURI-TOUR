// import { encryptUser } from "../components/shared/service/authService";
// import jwt_decoder from "jwt-decode";

export default {
  /*------------------resources handler----------------*/

  setResources(state, data) {
    if (data[1]) state.resources[data[0]] = data[1];
    else if (data[1] && data[0] == "page_title") {
      localStorage.setItem(
        "page_title",
        JSON.stringify(state.resources.data[1])
      );
    }
  },

  view(state, data) {
    state.accessories.view = null;
    setTimeout(() => {
      state.accessories.view = data;
    });
  },
  setAccessories(state, data) {
    if (data[1]) state.resources[data[0]] = data[1];
  }
};
