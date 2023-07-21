import * as type from "./types/index";
const mutations = {
  [type.SET_TOKEN](state, payload) {
    state.token = localStorage.setItem("client-token", payload);
  },
  [type.SET_AUTHS](state, payload) {
    state.isAuthenticated = payload;
  },
};
export default mutations;
