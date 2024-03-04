<template>
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
      <i class="fas fa-ellipsis-h rotate-90"></i>
    </button>
    <ul
      class="dropdown-menu absolute hidden right-0 top-1 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
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
          >Share</a
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
