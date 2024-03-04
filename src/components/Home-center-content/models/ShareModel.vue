<template>
  <div
    v-if="isOpenModal"
    class="fixed top-16 left-0 w-full h-full bg-gray-800 bg-opacity-20 flex justify-center items-center"
    @click="closeModalOutside"
  >
    <!-- Modal Content -->
    <div class="bg-white rounded-md w-11/12 md:w-[60%] lg:w-2/5" @click.stop>
      <!-- Modal Header -->
      <div
        class="flex justify-between items-center bg-red-500 w-full p-3 rounded-t-md"
      >
        <div class="flex justify-center items-center gap-3">
          <h2 class="text-2xl text-white font-medium">Share</h2>

          <i class="fas fa-share text-white text-3xl"></i>

          <p class="text-white font-medium text-2xl">{{ shares }}</p>
        </div>

        <button
          @click="closeModal"
          class="bg-red-400 hover:animate-ping p-1 rounded-full"
        >
          <img
            src="../assets/cros-icon.svg"
            alt="CrosIcons"
            width="32"
            height="32"
          />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-4 w-full h-[18rem] flex flex-col">
        <!-- facebook -->
        <div class="flex justify-start items-center gap-6">
          <img
            src="../assets/icons8-facebook.gif"
            alt="facebook"
            width="55"
            height="55"
            class="cursor-pointer"
          />
          <div class="flex items-center justify-center gap-8">
            <h3 class="cursor-pointer">Facebook</h3>
            <img
              src="../assets/icons8-share-50.png"
              alt="share"
              width="35"
              height="35"
              class="cursor-pointer"
            />
          </div>
        </div>

        <!-- whatsaap -->
        <div class="flex justify-start items-center gap-6 mt-4">
          <img
            src="../assets/icons8-whatsapp.gif"
            alt="whatsapp"
            width="55"
            height="55"
            class="cursor-pointer"
          />
          <div class="flex items-center justify-center gap-8">
            <h3 class="cursor-pointer">Whatsapp</h3>
            <img
              src="../assets/icons8-share-50.png"
              alt="share"
              width="35"
              height="35"
              class="cursor-pointer"
            />
          </div>
        </div>

        <!-- linkedin -->
        <div class="flex justify-start items-center gap-6 mt-4">
          <img
            src="../assets/icons8-linkedin.gif"
            alt="linkedin"
            width="55"
            height="55"
            class="cursor-pointer"
          />
          <div class="flex items-center justify-center gap-8">
            <h3 class="cursor-pointer">Linkedin</h3>
            <img
              src="../assets/icons8-share-50.png"
              alt="share"
              width="35"
              height="35"
              class="cursor-pointer"
            />
          </div>
        </div>

        <!-- twitter -->
        <div class="flex justify-start items-center mt-4">
          <img
            src="../assets/icons8-twitter.gif"
            alt="twitter"
            width="55"
            height="55"
            class="cursor-pointer"
          />
          <div class="flex items-center justify-center gap-8">
            <h3 class="cursor-pointer">Twitter</h3>
            <img
              src="../assets/icons8-share-50.png"
              alt="share"
              width="35"
              height="35"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePostModel",

  props: {
    isShareModalOpen: Boolean,
    modelTotalShare: {
      type: String,
    },
  },

  data() {
    return {
      isFollowing: false,

      isOpenModal: this.isShareModalOpen,
      shares: "",
    };
  },

  created() {
    this.shares = this.modelTotalShare;
    // console.log(this.likes);
  },

  watch: {
    isShareModalOpen(newValue) {
      this.isOpenModal = newValue;
    },
  },

  methods: {
    closeModal() {
      this.$emit("closeShareModal");
    },

    closeModalOutside(event) {
      const modalContent = document.querySelector(".bg-white");
      if (!modalContent.contains(event.target)) {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped></style>
