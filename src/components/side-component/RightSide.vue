<template>
  <div class="w-full">
    <!-- follow friends -->
    <div
      class="flex shadow-md rounded-md justify-center flex-col items-center w-full p-2"
    >
      <div class="flex flex-col w-full font-medium">
        <h3>Follow Request</h3>
      </div>

      <hr class="w-full my-4 border border-b-gray-400" />

      <div class="flex flex-col w-full">
        <div class="flex gap-4 w-full">
          <img
            src="./assets/user-image.jpg"
            alt="userimage"
            width="45"
            height="45"
            class="rounded-full"
          />

          <div class="flex flex-col">
            <h4 class="text-lg font-medium">Gaurav Tiwari</h4>
            <p class="text-sm font-medium">12 mutual friends</p>
          </div>
        </div>

        <div class="flex mt-4 w-full gap-1">
          <button
            class="bg-red-500 p-2 rounded-md text-white text-md hover:bg-red-600 w-1/2"
          >
            Confirm
          </button>
          <button
            class="bg-red-500 p-2 rounded-md text-white text-md hover:bg-red-600 w-1/2"
          >
            Decline
          </button>
        </div>
      </div>

      <hr class="w-full my-4 border border-b-gray-400" />

      <div class="w-full">
        <div class="flex items-center gap-5">
          <div class="flex">
            <img
              v-for="(image, index) in images"
              :src="image.src"
              :alt="'userImage' + index"
              width="32"
              height="32"
              :class="{
                'rounded-full': index === 0,
                '-ml-4 rounded-full': index !== 0,
              }"
              :key="index"
            />
          </div>

          <p class="text-gray-500 cursor-pointer hover:text-black">
            View all follow requests
          </p>
        </div>
      </div>
    </div>

    <!-- suggestions -->
    <div
      class="flex shadow-md rounded-md justify-center flex-col items-center w-full p-2 my-4"
    >
      <div class="flex flex-col w-full font-medium">
        <h3>Suggestions</h3>
      </div>

      <hr class="w-full my-4 border border-b-gray-400" />

      <div class="flex flex-col w-full">
        <div class="flex gap-4 w-full">
          <img
            src="./assets/user-image.jpg"
            alt="userimage"
            width="45"
            height="45"
            class="rounded-full"
          />

          <div class="flex flex-col">
            <h4 class="text-lg font-medium">Gaurav Tiwari</h4>
            <p class="text-sm font-medium">12 mutual friends</p>
          </div>
        </div>

        <div class="flex mt-4 w-full gap-1">
          <button
            class="bg-red-500 p-2 rounded-md text-white text-md hover:bg-red-600 w-1/2"
          >
            Confirm
          </button>
          <button
            class="bg-red-500 p-2 rounded-md text-white text-md hover:bg-red-600 w-1/2"
          >
            Decline
          </button>
        </div>
      </div>

      <hr class="w-full my-4 border border-b-gray-400" />

      <div class="w-full">
        <div class="flex items-center gap-5">
          <div class="flex">
            <img
              v-for="(image, index) in images"
              :src="image.src"
              :alt="'userImage' + index"
              width="32"
              height="32"
              :class="{
                'rounded-full': index === 0,
                '-ml-4 rounded-full': index !== 0,
              }"
              :key="index"
            />
          </div>

          <p class="text-gray-500 cursor-pointer hover:text-black">
            View all follow requests
          </p>
        </div>
      </div>
    </div>

    <div class="my-4 shadow-md rounded-md">
      <img
        src="./assets/iceCream.jpg"
        alt="Photos"
        class="rounded-md w-full h-[33rem]"
      />
    </div>

    <div class="w-full flex justify-center items-center">
      <button
        class="bg-red-500 hover:bg-red-600 w-full text-white text-lg font-medium p-2 rounded-md"
      >
        Raise a Ticket
      </button>
    </div>
  </div>
</template>

<script>
import src1 from "./assets/user-image.jpg";
import src2 from "./assets/user-image.jpg";
import src3 from "./assets/user-image.jpg";
import src4 from "./assets/user-image.jpg";

export default {
  name: "RightSideContent",
  data() {
    return {
      images: [{ src: src1 }, { src: src2 }, { src: src3 }, { src: src4 }],
    };
  },
  components: {},

  methods: {},

  mounted() {},
};
</script>

<style scoped></style>
