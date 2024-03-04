<template>
  <div
    class="w-1/2 p-2 absolute bg-gray-300 top-0 left-0 min-h-screen"
    v-if="isSideBarOpen"
  >
    <div class="mt-3 flex justify-between items-center">
      <img
        src="./signup-assets/rp1.png"
        alt="logo of RedPrix"
        class=""
        width="135"
      />

      <i
        class="fas fa-times text-4xl cursor-pointer"
        @click="closeSideNavBar"
      ></i>
    </div>

    <ul class="my-3 flex justify-start items-start flex-col">
      <li class="mx-3 my-3 w-50 list-none">
        <router-link to="/" class="">
          <div
            class="flex justify-center items-center"
            mouseover="label1"
            role="link"
          >
            <span class="text-lg font-bold mx-3 custom-text-color" id="block1"
              >home</span
            >
          </div>
        </router-link>
      </li>

      <li class="mx-3 my-3 w-50 list-none">
        <router-link to="/Signin" class="text-decoration-none">
          <div
            class="home-logo flex justify-center items-center"
            mouseover="label1"
            role="link"
          >
            <span class="text-lg font-bold mx-3 custom-text-color" id="block1"
              >Log-in</span
            >
          </div>
        </router-link>
      </li>

      <li class="mx-3 my-3 w-50 list-none">
        <!-- <img src="../Profile_Screens/assets/Home_selected.svg" alt=""/> -->
        <router-link to="/maincontactUs" class="text-decoration-none">
          <div
            class="home-logo flex justify-center items-center"
            mouseover="label1"
            role="link"
          >
            <span class="text-lg font-bold mx-3 custom-text-color" id="block1"
              >Contact-us</span
            >
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import { ref } from 'vue';
export default {
  name: "NavBar",
  data() {
    return {};
  },

  props: {
    isSideBarOpen: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeSideNavBar() {
      this.$emit("closeSidebar");
    },
  },
};
</script>

<style scoped></style>
