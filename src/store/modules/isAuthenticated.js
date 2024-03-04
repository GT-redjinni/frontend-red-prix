const state = { isAuthenticated: false };

const getters = {};

const actions = {
  checkAuthentication({ commit }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const isAuthenticated = !!token;
    commit("setAuthentication", isAuthenticated);
  },
};

const mutations = {
  setAuthentication(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
