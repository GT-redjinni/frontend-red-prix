<template>
  <div
    class="bg-white fixed top-0 left-0 w-full z-50 border border-b-red-700 ring-1 ring-red-700"
  >
    <!-- large screen -->
    <nav class="hidden md:block container mx-auto md:px-4 lg:px-32 py-1">
      <ul class="flex items-center justify-between">
        <!-- left side -->
        <div class="flex justify-center items-center gap-4">
          <!-- RP logo here -->
          <li class="text-black font-bold text-lg">
            <router-link to="/home">
              <img
                src="./assets/mainlogo.png"
                alt="mainRpLogo"
                width="75"
                height="32"
                class="mix-blend-darken"
              />
            </router-link>
          </li>

          <!-- search button here -->
          <li class="w-full">
            <div class="flex items-center justify-center w-full">
              <input
                type="search"
                class="p-1 rounded-l-md focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none bg-red-200"
              />
              <button
                type="submit"
                class="bg-red-500 p-1 rounded-r-md cursor-pointer hover:bg-red-600 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              >
                <i class="fas fa-search text-white text-lg"></i>
              </button>
            </div>
          </li>
        </div>

        <!-- right side -->
        <li>
          <ul class="flex gap-10">
            <!-- foodfee logo  -->
            <div class="relative inline-block text-left">
              <li
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                @click="toggleMenu"
              >
                <router-link to="/home" class="text-black">
                  <img
                    src="./assets/hand-holding.jpg"
                    alt="homeLogo"
                    width="35"
                    height="35"
                  />
                </router-link>
              </li>

              <div
                v-if="isMenuOpen"
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >Home</a
                  >
                </div>
              </div>
            </div>

            <!-- Dine-In logo  -->
            <li>
              <router-link to="/DineIn" class="text-black">
                <img
                  src="./assets/dine.jpg"
                  alt="homeLogo"
                  width="35"
                  height="35"
                />
              </router-link>
            </li>

            <!-- notifications -->
            <li>
              <router-link to="/Notifications" class="text-black">
                <img
                  src="./assets/notifications.jpg"
                  alt="homeLogo"
                  width="35"
                  height="35"
                />
              </router-link>
            </li>

            <!-- setting -->
            <li>
              <router-link to="/Settings" class="text-black">
                <img
                  src="./assets/setting.jpg"
                  alt="homeLogo"
                  width="35"
                  height="35"
              /></router-link>
            </li>

            <!-- person -->
            <li @click="logout" class="text-black cursor-pointer">
              <img
                src="./assets/defaultPersonImage.jpg"
                alt="homeLogo"
                width="35"
                height="35"
                class="rounded-full"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <nav class="md:hidden container mx-auto px-3 py-1">
      <ul class="flex items-center justify-between">
        <!-- left side -->
        <li class="text-black font-bold text-lg">
          <router-link to="/home">
            <img
              src="./assets/mainlogo.png"
              alt="mainRpLogo"
              width="75"
              height="35"
              class="mix-blend-darken"
            />
          </router-link>
        </li>

        <!-- right side -->

        <ul class="flex gap-10">
          <!-- person -->
          <li @click="logout" class="text-black cursor-pointer">
            <img
              src="./assets/defaultPersonImage.jpg"
              alt="homeLogo"
              width="75"
              height="35"
              class="rounded-full"
            />
          </li>
        </ul>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    logout() {
      localStorage.removeItem("token");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped></style>
