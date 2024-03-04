import axios from "../../axios";

const state = {
  profileData: [],
};

const getters = {
  getCurrentProfileInfo: (state) => state.profileData,
};

const actions = {
  async getProfile({ commit }) {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.get("customers/my-profile", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      //   console.log(response.data.data);

      commit("SET_PROFILE_DATA", response.data.data);
    } catch (error) {
      console.log("fetching the problem of current profile info", error);
    }
  },
};

const mutations = {
  SET_PROFILE_DATA(state, getProfileData) {
    state.profileData = getProfileData;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
