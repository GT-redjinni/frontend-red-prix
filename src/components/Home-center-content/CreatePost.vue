<template>
  <div class="w-full">
    <div class="w-full">
      <button
        class="w-full bg-red-500 text-white text-lg font-medium p-2 rounded-md"
      >
        MAKE ELITE ACCOUNT
      </button>
    </div>

    <!-- Create post box here -->
    <div class="my-4 w-full shadow-md p-2 rounded-md">
      <!-- header -->
      <div>
        <h2>Create Post</h2>
      </div>

      <!-- post box -->
      <div
        class="w-full relative justify-center items-center flex my-3"
        @click="openModal"
      >
        <img
          src="./assets/user-image.jpg"
          alt="user-image"
          width="32"
          height="32"
          class="rounded-full absolute left-1 cursor-pointer"
        />
        <input
          type="text"
          class="p-4 w-full bg-gray-100 outline-none ring-2 ring-gray-100 rounded-md cursor-pointer"
        />
        <label for="" class="absolute left-14 cursor-pointer"
          >What's on your mind Gaurav?</label
        >
      </div>

      <div class="flex justify-evenly items-center w-full my-2">
        <!-- photos -->
        <div
          class="flex items-center justify-center gap-2 max-[499px]:flex-col"
        >
          <img
            src="./assets/icons8-photos.gif"
            alt="locations"
            width="32"
            height="32"
          />
          <p>Photos</p>
        </div>

        <!-- add hastags -->
        <div
          class="flex items-center justify-center gap-2 max-[499px]:flex-col"
        >
          <img
            src="./assets/icons8-hashtags-64.png"
            alt="locations"
            width="32"
            height="32"
            class="bg-gray-400 p-1 rounded-md"
          />
          <p>Add Hash Tags</p>
        </div>

        <!-- location -->
        <div
          class="flex items-center justify-center gap-2 max-[499px]:flex-col"
        >
          <img
            src="./assets/icons8-location.gif"
            alt="locations"
            width="32"
            height="32"
          />
          <p>Locations</p>
        </div>
      </div>
    </div>

    <!-- model -->
    <div>
      <CreatePostModel :isModalOpen="isModalOpen" @closeModal="closeModal" />
    </div>

    <div>
      <UserPost />
    </div>
  </div>
</template>

<script>
import UserPost from "./UserPost.vue";
import CreatePostModel from "./models/CreatePostModel.vue";

export default {
  name: "CreatePost",

  data() {
    return {
      isModalOpen: false,
    };
  },

  components: { UserPost, CreatePostModel },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped></style>
