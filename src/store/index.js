import { createStore } from "vuex";
import signin from "./modules/signIn.js";
import userAllPost from "./modules/userAllPost.js";
import userLikeCommentShare from "./modules/userLikeCommentShare.js";
import getProfileInfo from "./modules/getProfileInfo.js";

export default createStore({
  modules: {
    signin,
    userAllPost,
    userLikeCommentShare,
    getProfileInfo,
  },
});
