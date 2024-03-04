import axios from "../../axios";

const state = { userPosts: [], errorMessage: "", currentPage: 1 };

const getters = {
  getUserPosts: (state) => state.userPosts,
  getUserPostsErrorMsg: (state) => state.errorMessage,
};

const actions = {
  async userPost({ commit, state }) {
    try {
      const authToken = localStorage.getItem("token");
      const response = await axios.get("customers/posts", {
        params: {
          page: state.currentPage,
        },
        headers: {
          DeviceID: "1111",
          versionName: "1.0.0",
          DeviceType: "0",
          Authorization: `Bearer ${authToken}`,
        },
      });

      commit("SET_POST_DATA", response.data.data);

      // console.log(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        let errorMessage = "Invalid email or password. Please try again.";
        if (error.response.data && error.response.data.errors) {
          errorMessage = error.response.data.errors.join(", ");
        }

        commit("SET_ERROR", errorMessage);
      } else {
        commit("SET_ERROR", "An error occurred while logging in.");
      }
    }
  },
};

const mutations = {
  SET_POST_DATA(state, postData) {
    state.userPosts = [...state.userPosts, ...postData];
    state.currentPage++;
  },

  SET_ERROR(state, postError) {
    state.errorMessage = postError;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
