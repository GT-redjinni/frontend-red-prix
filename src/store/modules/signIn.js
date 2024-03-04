import axios from "../../axios";

const state = {
  user: "",
  error: "",
  token: "",
  isAuthenticated: false,
  userData: [],
};

const getters = {
  getUserData: (state) => state.userData,
  getErrorMsg: (state) => state.error,
};

const actions = {
  async userSignin({ commit }, { email, password }) {
    try {
      const response = await axios.post("login", { email, password });
      const { data } = response;

      localStorage.setItem("id", data.data.id);
      localStorage.setItem("token", data.data.authorization);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("password", password);

      // if (localStorage.getItem("token")) {
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + localStorage.getItem("token");
      //   const resultfinal = await axios.get("customers/posts", {
      //     headers: {
      //       DeviceID: "1111",
      //       versionName: "1.0.0",
      //       DeviceType: "0",
      //     },
      //   });
      // }

      // Commit mutation to update state if needed

      commit("SET_USER_DATA", response.data.data);
      // console.log("stroe from user data = ", response.data.data);
    } catch (error) {
      // console.log("store error", error.response.data);
      if (
        error.response.data.status === false ||
        error.response.data.status_code === 422
      ) {
        let errorMessage = error.response.data.message;
        // console.log(errorMessage);

        commit("SET_ERROR", errorMessage);
        console.log(SET_ERROR);
      } else {
        commit("SET_ERROR", "An error occurred while logging in.");
      }
    }
  },
};

const mutations = {
  SET_USER_DATA(state, userData) {
    state.userData = userData;
  },

  SET_ERROR(state, errorMsg) {
    state.error = errorMsg;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
