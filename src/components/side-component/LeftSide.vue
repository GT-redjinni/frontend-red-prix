<template>
  <div class="w-full">
    <div
      class="flex shadow-md rounded-md justify-center flex-col items-center w-full"
    >
      <div class="flex w-full">
        <img
          class="rounded-t-md w-full h-36"
          src="./assets/headerImage.jpg"
          alt="headerImage"
        />
      </div>

      <div
        class="flex justify-center items-center flex-col font-medium relative"
      >
        <div class="absolute top-[-35px]">
          <img
            :src="
              profileInfo.profile_photo
                ? profileInfo.profile_photo
                : defaultProfilePhoto
            "
            alt="headerImage"
            width="75"
            height="75"
            class="rounded-full"
          />
        </div>

        <div class="flex flex-col justify-center items-center p-2 mt-12">
          <h2 class="text-2xl">{{ profileInfo.name }}</h2>
          <div class="flex gap-2 items-center justify-center">
            <span class="text-md"
              >{{
                profileInfo.country && profileInfo.country.name
                  ? profileInfo.country.name
                  : "India"
              }}
            </span>
            <span class="text-md"
              >{{
                profileInfo.city && profileInfo.city.name
                  ? profileInfo.city.name
                  : "Lucknow"
              }}
            </span>
          </div>
          <br />

          <RouterLink to="/Home" class="w-full">
            <button
              role="link"
              class="bg-blue-700 text-white font-semibold p-2 rounded-md w-full hover:bg-blue-600"
            >
              View Profile
            </button>
          </RouterLink>
        </div>

        <hr class="w-full my-4 border border-b-gray-400" />

        <div class="w-full items-start p-2">
          <p class="text-md font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            magnam quam perspiciatis distinctio esse tenetur magni ducimus, eius
            illum enim consectetur cum hic atque aliquid beatae molestias
            debitis quas impedit!
          </p>
        </div>
      </div>
    </div>

    <div class="my-4 shadow-md rounded-md">
      <img
        src="./assets/burger.jpg"
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
import { mapActions, mapGetters } from "vuex";

import defaultProfilePhoto from "./assets/user-image.jpg";

export default {
  name: "LeftSideContent",
  data() {
    return {
      profileInfo: [],

      defaultProfilePhoto: defaultProfilePhoto,
    };
  },

  components: {},

  computed: {
    ...mapGetters(["getCurrentProfileInfo"]),
  },

  created() {
    this.getProfileData();
  },

  methods: {
    ...mapActions(["getProfile"]),

    getProfileData() {
      this.getProfile()
        .then(() => {
          this.profileInfo = this.getCurrentProfileInfo;
        })
        .catch((error) => {
          console.log("in componet fetching profile data error", error);
        });
    },
  },
};
</script>

<style scoped></style>
