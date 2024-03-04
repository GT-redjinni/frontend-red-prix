import axios from "../../axios";

const state = {
  userLikes: [],
  userComments: [],
};

const getters = {
  getUserLikesData: (state) => state.userLikes,
  getUserCommentsData: (state) => state.userComments,
};

const actions = {
  async userLikes({ commit }, { postId, currentPage, likesPerPage }) {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.post(
        `customers/posts/likes`,
        {
          post_id: postId,
          page: currentPage,
          per_page: likesPerPage,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      commit("SET_USER_LIKES", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },

  async userComments({ commit }, { postId }) {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.post(
        `customers/posts/comments`,
        {
          post_id: postId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // console.log("Store Comment details", response.data);

      commit("SET_USER_COMMENT", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  SET_USER_LIKES(state, userLikeData) {
    state.userLikes = userLikeData;
  },

  SET_USER_COMMENT(state, userCommentData) {
    state.userComments = userCommentData;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
