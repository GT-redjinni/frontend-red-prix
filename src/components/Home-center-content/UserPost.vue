<template>
  <div class="container">
    <div
      class="flex items-center justify-start flex-col shadow bg-white rounded-md w-full my-4"
      v-for="post in posts"
      :key="post.id"
    >
      <!-- header here -->
      <div class="flex items-start justify-between w-full p-2">
        <div class="flex items-start justify-start gap-2">
          <img
            :src="
              post.user.profile_photo
                ? post.user.profile_photo
                : defaultProfileImage
            "
            alt="userPrifile"
            width="45"
            height="45"
            class="rounded-full"
          />

          <!-- user name display here -->
          <div class="flex items-start flex-col">
            <h5 class="m-0 p-0">
              {{ post.user.name }}
            </h5>
            <div class="flex gap-3 my-2">
              <div class="flex items-center">
                <i class="fas fa-clock" style="color: green"></i>
                <p class="m-0 p-0 ms-2">
                  {{ convertDateTimeToDuration(post.created_at) }}
                </p>
              </div>

              <div class="flex justify-center items-center gap-2">
                <i class="fas fa-map-marker-alt" style="color: red"></i>
                <p class="m-0 p-0">{{ post.city.name || "Surat" }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- three dot drop down here -->
        <div>
          <ListThreeDot />
        </div>
      </div>

      <!-- descriptions -->
      <div class="flex w-full p-2 items-center justify-start">
        <p class="text-lg font-medium">{{ post.description }}</p>
      </div>

      <!-- middle data like image here -->
      <div
        v-if="post.images && post.images.length > 0"
        class="w-full mt-3 post-img-div"
      >
        <div v-if="post.images.length > 1" class="flex overflow-auto">
          <div
            v-for="postimg in post.images"
            :key="postimg.id"
            class="p-2 overflow-auto"
          >
            <div class="object-contain img-1-div">
              <img
                :src="postimg.image ? postimg.image : defaultPostsImage"
                alt="Post Image"
                class="w-full rounded-md"
                style="height: 35rem"
              />
            </div>
          </div>
        </div>

        <div v-else class="p-2 img-2-div rounded-md">
          <img
            :src="
              post.images[0].image ? post.images[0].image : defaultPostsImage
            "
            alt="Post Image"
            class="w-full overflow-hidden rounded-md"
            style="height: 35rem"
          />
        </div>
      </div>

      <!-- user comment here -->
      <div class="mt-3 flex flex-col p-2 w-full">
        <LikeShareComment
          :totalLike="post.likes_count"
          :totalComment="post.comments_count"
          :totalShare="post.shares_count"
          :likeUsers="post.likes"
          :postIdLikeShareComment="post.id"
        />
      </div>

      <hr class="w-full mt-1" />

      <!-- here show the 2 comments -->
      <div class="w-full p-2 flex">
        <!-- v-for="(comment, index) in 2" :key="index" -->
        <ShowSingleComment />
      </div>

      <!-- View More Comments -->
      <div class="w-full p-2 flex">
        <h5 class="fs-6 more-comment">View More comment</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ListThreeDot from "./ListThreeDot.vue";
import LikeShareComment from "./LikeShareComment.vue";
import ShowSingleComment from "./ShowSingleComment.vue";

import defaultPostsImage from "./assets/12.jpg";
import defaultProfileImage from "./assets/user-image.jpg";

export default {
  name: "UserPost",
  data() {
    return {
      posts: [],
      errorMessage: "",
      userType: "",

      defaultProfileImage: defaultProfileImage,
      defaultPostsImage: defaultPostsImage,
    };
  },

  components: { ListThreeDot, LikeShareComment, ShowSingleComment },

  created() {
    this.fetchUserPosts();
  },

  computed: {
    ...mapGetters(["getUserPosts", "getUserPostsErrorMsg"]),
  },

  methods: {
    ...mapActions(["userPost"]),

    async fetchUserPosts() {
      await this.userPost()
        .then(() => {
          this.posts = this.getUserPosts;
          // console.log(this.posts);
        })
        .catch((error) => {
          this.errorMessage = this.getUserPostsErrorMsg;

          console.log(error);
        });
    },

    convertDateTimeToDuration(dateTimeString) {
      const createdAt = new Date(dateTimeString);
      const now = new Date();

      // Calculate the difference in milliseconds
      const diff = now - createdAt;

      // Convert milliseconds to seconds, minutes, hours, and days
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(diff / (1000 * 60));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30); // Approximation, not exact
      const years = Math.floor(months / 12); // Approximation, not exact

      // Determine the appropriate unit
      let durationString = "";

      switch (true) {
        case years > 0:
          durationString = `${years} year${years > 1 ? "s" : ""}`;
          break;
        case months > 0:
          durationString = `${months} month${months > 1 ? "s" : ""}`;
          break;
        case days > 0:
          durationString = `${days} day${days > 1 ? "s" : ""}`;
          break;
        case hours > 0:
          durationString = `${hours} hour${hours > 1 ? "s" : ""}`;
          break;
        case minutes > 0:
          durationString = `${minutes} minute${minutes > 1 ? "s" : ""}`;
          break;
        case seconds > 0:
          durationString = `${
            seconds < 5
              ? "just now"
              : `${seconds} second${seconds > 1 ? "s" : ""}`
          }`;
          break;
        default:
          durationString = "just now";
          break;
      }

      return durationString;
    },
  },
};
</script>

<style scoped>
.more-comment {
  border-bottom: 2px solid gray;
}

.more-comment:hover {
  cursor: pointer;
}
</style>
