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
          <h2 class="text-2xl text-white font-medium">Likes</h2>

          <i class="fas fa-thumbs-up text-white text-3xl"></i>

          <p class="text-white font-medium text-2xl">
            {{ totalLike }}
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

        <!-- List of users who liked the post -->

        <div
          v-if="likesInfo.likes && likesInfo.likes.data"
          v-for="(like, index) in likesInfo.likes.data"
          :key="index"
        >
          <div class="flex justify-between items-center gap-4">
            <img
              :src="
                like.user.profile_photo
                  ? like.user.profile_photo
                  : defaultLikeUserProfile
              "
              alt="userIcons"
              class="rounded-full h-20 w-24 object-cover"
            />
            <div class="flex justify-start w-full flex-col">
              <h4 class="text-lg font-medium">{{ like.user.name }}</h4>
              <h6 class="text-sm font-medium">{{ like.post.title }}</h6>
            </div>

            <!-- follow and unfollow button -->
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
    isLikeModalOpen: Boolean,
    // isLikeUserInfo: {
    //   type: Object,
    // },
    isLikeModelPostId: {
      type: String,
    },
  },

  data() {
    return {
      isFollowing: false,
      isOpenModal: this.isLikeModalOpen,
      likesInfo: [],
      totalLike: "",

      likePostId: "",
      currentPage: "1",
      likesPerPage: "15",

      defaultLikeUserProfile: defaultLikeUserProfile,

      topLoading: false,
      loading: false,
      loadingMoreInProgress: false,
    };
  },

  watch: {
    isLikeModalOpen(newValue) {
      this.isOpenModal = newValue;
      this.likePostId = this.isLikeModelPostId;
      // console.log(this.likePostId);

      if (newValue && !this.getUserLikeInfoCalled) {
        this.getUserLikeInfo();
      }
    },
  },

  computed: {
    ...mapGetters(["getUserLikesData"]),
  },

  methods: {
    ...mapActions(["userLikes"]),

    toggleFollow() {
      this.isFollowing = !this.isFollowing;
    },

    closeModal() {
      this.$emit("closeLikeModal");
    },

    closeModalOutside(event) {
      const modalContent = document.querySelector(".bg-white");
      if (!modalContent.contains(event.target)) {
        this.closeModal();
      }
    },

    getUserLikeInfo() {
      this.topLoading = true;

      this.userLikes({
        postId: this.likePostId,
        currentPage: this.currentPage,
        likesPerPage: this.likesPerPage,
      })
        .then(() => {
          this.topLoading = false;

          // this.likesInfo = this.getUserLikesData;
          this.totalLike = this.getUserLikesData.likes.total;

          const newLikeInfo = this.getUserLikesData.likes.data;
          if (newLikeInfo.length > 0) {
            if (this.likesInfo.likes && this.likesInfo.likes.data) {
              this.likesInfo.likes.data.push(...newLikeInfo);
            } else {
              this.likesInfo.likes = { data: [...newLikeInfo] };
            }

            // console.log("user data of likeinfo = ", this.likesInfo);

            if (this.likesInfo.likes.data.length >= 15) {
              this.currentPage++;
            }
          } else {
            console.log("All likes have been fetched.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleScroll() {
      const container = this.$refs.likeList;
      const scrollPosition = container.scrollTop + container.clientHeight;
      const totalHeight = container.scrollHeight;

      // Check if user has scrolled to the bottom and if loading more likes is not already in progress
      if (
        scrollPosition >= totalHeight &&
        !this.loading &&
        !this.loadingMoreInProgress
      ) {
        this.loading = true;
        this.loadingMoreInProgress = true;

        // console.log(this.likesInfo.likes.data.length);

        if (this.likesInfo.likes.data.length >= 15) {
          this.loadingMoreLikes();
        }
      }
    },

    loadingMoreLikes() {
      setTimeout(() => {
        this.loading = false;
        this.loadingMoreInProgress = false;
      }, 2000);
      console.log("loading");
      this.getUserLikeInfo();
    },
  },
};
</script>

<style scoped></style>
