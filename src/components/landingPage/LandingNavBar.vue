<template>
  <div>
    <!-- Navbar for larger screens -->
    <div class="md:flex justify-center items-center hidden">
      <nav class="flex w-full justify-evenly p-2 fixed top-0 bg-gray-300">
        <div class="flex justify-start pl-2">
          <router-link to="/" class="">
            <img
              src="./signup-assets/rp1.png"
              alt="logo of RedPrix"
              class="object-contain w-1/3"
            />
          </router-link>
        </div>

        <ul class="flex gap-5">
          <li
            class="list-none text-lg shadow p-2 bg-white rounded hover:bg-gray-100"
          >
            <router-link to="/Signin" class="text-black">Log-in</router-link>
          </li>

          <li
            class="list-none text-lg shadow p-2 bg-white rounded hover:bg-gray-100"
          >
            <router-link to="/signup" class="text-black">Sign-up</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Navbar for smaller screens -->
    <nav
      class="flex justify-between items-center md:hidden p-3"
      style="background-color: rgb(229, 228, 227)"
    >
      <div class="flex justify-start pl-2 w-1/2">
        <router-link to="/" class="">
          <img
            src="./signup-assets/rp1.png"
            alt="logo of RedPrix"
            class="w-1/2 object-contain"
          />
        </router-link>
      </div>

      <div>
        <span class="navbar-toggler-icon cursor-pointer" @click="toggleNavbar">
          <i class="fas fa-bars text-3xl"></i>
        </span>
      </div>

      <!-- Use the SideNavigation component -->
      <LoadingSideNavBar
        v-if="isSideNavigationOpen"
        :isSideBarOpen="isSideNavigationOpen"
        @closeSidebar="closeSidebar"
      />
    </nav>
  </div>
</template>

<script>
import LoadingSideNavBar from "./LoadingSideNavBar.vue";

export default {
  name: "LandingNavBar",
  data() {
    return {
      isSideNavigationOpen: false,
    };
  },

  methods: {
    toggleNavbar() {
      this.isSideNavigationOpen = !this.isSideNavigationOpen;
    },

    closeSidebar() {
      this.isSideNavigationOpen = false;
    },
  },
  components: { LoadingSideNavBar },
};
</script>

<style scoped></style>
