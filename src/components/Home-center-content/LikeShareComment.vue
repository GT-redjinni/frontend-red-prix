<template>
  <!-- user commment here -->
  <div class="flex justify-between items-center w-100w-full px-4">
    <!-- like here -->
    <div class="flex justify-center items-center gap-2">
      <img
        src="./assets/like-t.svg"
        alt="likeImage"
        width="28"
        height="28"
        class="cursor-pointer"
        @click="openLikeModal"
      />
      <h6 class="m-0 p-0">{{ likes }}</h6>
    </div>

    <!-- Comment here -->
    <div class="flex justify-center items-center gap-2">
      <img
        src="./assets/comment.svg"
        alt="commentImage"
        width="28"
        height="28"
        class="cursor-pointer"
        @click="openCommentModal"
      />
      <h6 class="m-0 p-0">{{ comments }}</h6>
    </div>

    <!-- share here -->
    <div class="flex justify-center items-center gap-2">
      <img
        src="./assets/share.svg"
        alt="shareImage"
        width="28"
        height="28"
        class="cursor-pointer"
        @click="openShareModal"
      />
      <h6 class="m-0 p-0">{{ shares }}</h6>
    </div>

    <!-- models here -->
    <LikeModel
      :isLikeModelPostId="postId"
      :isLikeModalOpen="isLikeModalOpen"
      @closeLikeModal="closeLikeModal"
    />

    <CommentMoel
      :isCommentModelPostId="postId"
      :isCommentModalOpen="isCommentModalOpen"
      @closeCommentModal="closeCommentModal"
    />

    <ShareModel
      :modelTotalShare="shares"
      :isShareModalOpen="isShareModalOpen"
      @closeShareModal="closeShareModal"
    />
  </div>
</template>

<script>
import CommentMoel from "./models/CommentMoel.vue";
import LikeModel from "./models/LikeModel.vue";
import ShareModel from "./models/ShareModel.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "LiskeShareComment",
  data() {
    return {
      likes: "",
      shares: "",
      comments: "",

      postId: "",

      isLikeModalOpen: false,
      isCommentModalOpen: false,
      isShareModalOpen: false,
    };
  },

  props: {
    postIdLikeShareComment: {
      type: String,
    },

    totalLike: {
      type: String,
    },
    totalComment: {
      type: String,
    },
    totalShare: {
      type: String,
    },
  },

  components: { LikeModel, CommentMoel, ShareModel },

  computed: {
    ...mapGetters(["getUserLikesData", "getUserCommentsData"]),
  },

  created() {
    this.postId = this.postIdLikeShareComment;

    this.likes = this.totalLike;
    this.comments = this.totalComment;
    this.shares = this.totalShare;
  },

  methods: {
    ...mapActions(["userLikes", "userComments"]),

    openLikeModal() {
      this.isLikeModalOpen = true;
      // console.log(this.postId);
    },

    openCommentModal() {
      this.isCommentModalOpen = true;
    },

    openShareModal() {
      this.isShareModalOpen = true;
    },

    closeLikeModal() {
      this.isLikeModalOpen = false;
    },

    closeCommentModal() {
      this.isCommentModalOpen = false;
    },

    closeShareModal() {
      this.isShareModalOpen = false;
    },
  },
};
</script>

<style scoped></style>
