<template>
  <div
    v-if="isOpenModal"
    class="fixed top-16 left-0 w-full h-full bg-gray-800 bg-opacity-20 flex justify-center items-center"
    @click="closeModalOutside"
  >
    <!-- Modal Content -->
    <div class="bg-white rounded-md w-11/12 md:w-[60%] lg:w-2/5" @click.stop>
      <!-- Modal Header -->
      <div
        class="flex justify-between items-center bg-red-500 w-full p-3 rounded-t-md"
      >
        <div class="flex justify-center items-center gap-3">
          <h2 class="text-2xl text-white font-medium">Comment</h2>

          <i class="fas fa-comment text-white text-3xl"></i>

          <p class="text-white font-medium text-2xl">
            {{ commentsInfo.comments_count }}
          </p>
        </div>

        <button
          @click="closeModal"
          class="bg-red-400 hover:animate-ping p-1 rounded-full"
        >
          <img
            src="../assets/cros-icon.svg"
            alt="CrosIcons"
            width="32"
            height="32"
          />
        </button>
      </div>

      <!-- Modal Body -->
      <div
        class="p-4 w-full h-[32rem] overflow-auto"
        ref="likeList"
        @scroll="handleScroll"
      >
        <!-- search button -->
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="absolute top-0 left-0 flex items-center">
            <button
              class="p-2 h-full rounded-md border-0 bg-transparent text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <i class="fas fa-search text-black text-2xl"></i>
            </button>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="pl-10 pr-2 py-2 block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>

        <!-- Spinner -->
        <div v-if="topLoading" class="flex justify-center mt-5">
          <i class="fas fa-spinner fa-spin text-gray-500 text-3xl"></i>
        </div>

        <hr class="my-5" />

        <!-- user image and name section here -->
        <div v-for="(comment, index) in commentsInfo.comments" :key="index">
          <div class="flex gap-4">
            <img
              src="../assets/user-image.jpg"
              alt="userIcons"
              width="55"
              height="32"
              class="rounded-full"
            />

            <div class="flex justify-between w-full">
              <div class="flex flex-col">
                <h4 class="text-lg font-medium">
                  {{ comment.user.name || "Gaurav Tiwari" }}
                </h4>
                <h6 class="text-sm font-medium">{{ comment.comment }}</h6>
              </div>

              <div>
                <button
                  @click="toggleFollow"
                  :class="{
                    'bg-red-500 hover:bg-red-600': !isFollowing,
                    'bg-gray-400 hover:bg-gray-500': isFollowing,
                  }"
                  class="text-white p-2 rounded-md"
                >
                  {{ isFollowing ? "Unfollow" : "Follow" }}
                </button>
              </div>
            </div>
          </div>
          <hr class="my-5" />
        </div>

        <!-- Show spinner after the last item -->

        <div v-if="loading" class="flex justify-center mt-5">
          <i class="fas fa-spinner fa-spin text-gray-500 text-3xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultLikeUserProfile from "../assets/user-image.jpg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreatePostModel",

  props: {
    isCommentModalOpen: Boolean,
    isCommentModelPostId: {
      type: String,
    },
  },

  data() {
    return {
      isFollowing: false,

      isOpenModal: this.isCommentModalOpen,
      commentsInfo: [],
      commentPostId: "",

      defaultLikeUserProfile: defaultLikeUserProfile,

      topLoading: false,
      loading: false,
      loadingMoreInProgress: false,
    };
  },

  created() {
    this.comments = this.modelTotalComment;
    // console.log(this.likes);
  },

  watch: {
    isCommentModalOpen(newValue) {
      this.isOpenModal = newValue;

      this.commentPostId = this.isCommentModelPostId;

      if (newValue && !this.getUserLikeInfoCalled) {
        this.getUserCommentInfo();
      }
    },
  },

  computed: {
    ...mapGetters(["getUserCommentsData"]),
  },

  methods: {
    ...mapActions(["userComments"]),

    toggleFollow() {
      this.isFollowing = !this.isFollowing;
    },

    closeModal() {
      this.$emit("closeCommentModal");
    },

    closeModalOutside(event) {
      const modalContent = document.querySelector(".bg-white");
      if (!modalContent.contains(event.target)) {
        this.closeModal();
      }
    },

    getUserCommentInfo() {
      this.topLoading = true;

      this.userComments({
        postId: this.commentPostId,
      })
        .then(() => {
          this.topLoading = false;

          this.commentsInfo = this.getUserCommentsData;
          // console.log(this.commentsInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
