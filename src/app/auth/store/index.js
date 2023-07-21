import state from "./states/index";
import getters from "./getters/index";
import mutations from "./mutations/index";
import actions from "./actions/index";

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
