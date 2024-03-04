<template>
  <div class="">
    <NavBar />
  </div>

  <div class="flex flex-row gap-4 justify-center w-full mt-24">
    <div class="hidden basis-1/5 md:basis-[28%] lg:basis-[20%] md:block my-2">
      <img
        src="./assets/burgerImages.jpeg"
        alt="burgerImages"
        class="rounded-lg w-full h-32 object-fill"
      />
    </div>

    <!-- Create post box here -->
    <div class="basis-10/12 md:basis-2/5 max-sm:basis-[95%] my-2">
      <div class="w-full shadow-md p-2 rounded-md">
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
    </div>

    <div class="hidden basis-1/5 md:basis-[28%] lg:basis-[20%] md:block my-2">
      <img
        src="./assets/saladImages.jpeg"
        alt="saladImages"
        class="rounded-lg w-full h-32 object-fill"
      />
    </div>
  </div>

  <div class="my-6">
    <CategoryTopBrand />
  </div>

  <!-- model -->
  <div>
    <CreatePostDineInModel
      :isModalOpen="isModalOpen"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import NavBar from "../navbar/NavBar.vue";
import CreatePostDineInModel from "./models/CreatePostDineInModel.vue";
import CategoryTopBrand from "./pages/CategoryTopBrand.vue";

export default {
  name: "DineIn",

  data() {
    return {
      isModalOpen: false,
    };
  },

  components: { NavBar, CreatePostDineInModel, CategoryTopBrand },

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
