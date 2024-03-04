<template>
  <div
    class="flex flex-col w-full max-[767px]:px-14 max-[639px]:px-4 min-[1024px]:px-24 min-[1199px]:px-28 min-[1409px]:px-36"
  >
    <div class="scroll-container flex items-center w-full gap-11">
      <!-- select-all -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/select-all.svg"
            alt="select-all"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>All</h5>
      </div>

      <!-- groceries-i -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/groceries-i.svg"
            alt="groceries-i"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Grocery</h5>
      </div>

      <!-- dairy-i -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/dairy-i.svg"
            alt="dairy-i"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Dairy</h5>
      </div>

      <!-- gym -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/gym.svg"
            alt="gym"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>GYM</h5>
      </div>

      <!-- Bakery -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/cup-i.svg"
            alt="cup-i"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Bakery</h5>
      </div>

      <!-- cafe -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/cafe-i.svg"
            alt="cafe-i"
            width="65"
            height="45"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Cafe</h5>
      </div>

      <!-- spoon -->
      <div class="flex justify-center items-center flex-col">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/spoon.svg"
            alt="spoon"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Restaurant</h5>
      </div>

      <!-- Icecream-i -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/Icecream-i.svg"
            alt="Icecream-i"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Ice-Cream</h5>
      </div>

      <!-- salon -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/salon.svg"
            alt="salon"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Salon</h5>
      </div>

      <!-- koper-i -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/koper-i.svg"
            alt="koper-i"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Footware</h5>
      </div>

      <!-- clothes -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <img
            src="../assets/clothes.svg"
            alt="clothes"
            class="bg-blend-darken w-11 h-10"
          />
        </div>
        <h5>Clothes</h5>
      </div>

      <!-- New -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="shadow-md p-2 rounded-md w-[4rem]">
          <p class="bg-blend-darken w-11 h-10"></p>
        </div>
        <h5>New</h5>
      </div>
    </div>

    <!-- top brand sections -->
    <div class="my-5 flex flex-col md:flex-row items-center w-full">
      <h1 class="text-3xl font-semibold text-gray-400 md:w-[55%] lg:w-[28%]">
        Top branbs for you
      </h1>
      <div class="border border-b-2 w-full mt-3"></div>
    </div>

    <!-- top brnad poster imagess here -->
    <div class="scroll-container flex items-center w-full gap-5">
      <!-- Vijay Dairy -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="w-[12rem]">
          <img
            src="../assets/Vijay.png"
            alt="VijayImage"
            class="bg-blend-darken object-cover w-full h-48"
          />
        </div>

        <h5>Vijay Dairy</h5>
      </div>

      <!-- Goldy Cakes -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="w-[12rem]">
          <img
            src="../assets/poster.png"
            alt="poster"
            class="bg-blend-darken object-cover w-full h-48"
          />
        </div>
        <h5>Goldy Cakes</h5>
      </div>

      <!-- Uncle Sammy -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="w-[12rem]">
          <img
            src="../assets/uncle.png"
            alt="uncle"
            class="bg-blend-darken object-cover w-full h-48"
          />
        </div>
        <h5>Uncle Sammy</h5>
      </div>

      <!-- Gents Salon -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="w-[12rem]">
          <img
            src="../assets/gentssalon.png"
            alt="gentssalon"
            class="bg-blend-darken object-cover w-full h-48"
          />
        </div>
        <h5>Gents Salon</h5>
      </div>

      <!-- Levi's -->
      <div class="flex justify-center items-center flex-col w-full">
        <div class="w-[12rem]">
          <img
            src="../assets/levis.png"
            alt="levis"
            class="bg-blend-darken object-cover w-full h-48"
          />
        </div>
        <h5>Levi's</h5>
      </div>
    </div>

    <div class="my-5 w-full">
      <OfferNearYou />
    </div>
  </div>
</template>

<script>
import OfferNearYou from "./OfferNearYou.vue";

export default {
  name: "CategoryTopBrand",
  components: { OfferNearYou },
};
</script>

<style scoped>
.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 768px) {
  .scroll-container {
    overflow-x: auto;
  }
}
</style>
