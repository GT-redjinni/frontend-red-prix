<template>
  <div class="w-full p-2 flex items-start justify-center gap-2">
    <img
      src="./assets/user-image.jpg"
      alt="userImage"
      width="32"
      height="32"
      class="rounded-full"
    />

    <div
      class="flex justify-between items-start w-full rounded-md p-2 bg-gray-400 relative"
    >
      <div class="flex flex-col justify-start items-start">
        <h6>Gaurav Tiwari</h6>
        <p class="text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti.
        </p>
      </div>

      <div class="flex absolute right-2 top-0 gap-2">
        <h2>4 minute ago</h2>

        <div
          class="dropdown relative"
          @mouseover="openDropdown"
          @mouseleave="closeDropdown"
        >
          <button
            class="btn dropdown relative block"
            type="button"
            id="dropdownMenuButton"
            :aria-expanded="isDropdownOpen"
            @click="toggleDropdown"
          >
            <i class="fas fa-ellipsis-h"></i>
          </button>

          <ul
            class="dropdown-menu absolute hidden right-0 top-3 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
            aria-labelledby="dropdownMenuButton"
            :class="{ show: isDropdownOpen }"
          >
            <li>
              <a
                class="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                href="#"
                >Delete</a
              >
            </li>

            <hr />

            <li>
              <a
                class="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                href="#"
                >Report</a
              >
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListThreeDot",
  data() {
    return {
      isDropdownOpen: false,
    };
  },

  created() {},

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openDropdown() {
      this.isDropdownOpen = true;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  display: none;
}
.dropdown-menu.show {
  display: block;
}
</style>
