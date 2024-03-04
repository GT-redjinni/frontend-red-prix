<template>
  <!-- top brand sections -->
  <div class="my-5 flex flex-col md:flex-row items-center w-full">
    <h1 class="text-3xl font-semibold text-gray-400 md:w-[55%] lg:w-[28%]">
      Offers Near You
    </h1>

    <div class="border border-b-2 w-full mt-3 mx-5"></div>

    <div class="flex items-center gap-4">
      <h4 class="font-medium text-2xl">Filter</h4>

      <img
        src="../assets/icons8-filter.gif"
        alt="filterIcon"
        class="w-2/5 cursor-pointer"
      />
    </div>
  </div>

  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 shadow-md bg-white rounded-md p-4"
  >
    <div class="flex flex-col shadow-md p-1 rounded-md">
      <img src="../assets/cream.png" alt="cream" class="w-full" />

      <div class="flex flex-col">
        <h1 class="font-semibold text-lg">Cream & Crust</h1>
        <p class="font-medium text-sm">abhinand heights surat</p>

        <span class="text-red-700 font-medium text-lg">
          OFFER:
          <span class="text-black">Buy 1 Get 1 Pizza</span>
        </span>
      </div>
    </div>

    <div class="flex flex-col shadow-md p-1 rounded-md">
      <img src="../assets/CoffeeKing.png" alt="CoffeeKing" class="w-full" />

      <div class="flex flex-col">
        <h1 class="font-semibold text-lg">Cream & Crust</h1>
        <p class="font-medium text-sm">abhinand heights surat</p>

        <span class="text-red-700 font-medium text-lg">
          OFFER:
          <span class="text-black">Buy 1 Get 1 Pizza</span>
        </span>
      </div>
    </div>

    <div class="flex flex-col shadow-md p-1 rounded-md">
      <img src="../assets/coffee-time.png" alt="cream" class="w-full" />

      <div class="flex flex-col">
        <h1 class="font-semibold text-lg">Cream & Crust</h1>
        <p class="font-medium text-sm">abhinand heights surat</p>

        <span class="text-red-700 font-medium text-lg">
          OFFER:
          <span class="text-black">Buy 1 Get 1 Pizza</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferNearYou",
};
</script>

<style scoped></style>
