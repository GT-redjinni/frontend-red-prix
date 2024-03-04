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
        <h2 class="text-3xl text-white font-medium">Create Post</h2>

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
      <div class="p-4 w-full h-[35rem] overflow-auto">
        <!-- user image and name section here -->
        <div class="flex gap-4">
          <img
            src="../assets/user-image.jpg"
            alt="userIcons"
            width="55"
            height="32"
            class="rounded-full"
          />

          <div class="flex flex-col">
            <h4 class="text-lg font-medium">Gaurav Tiwari</h4>
            <h6 class="text-sm font-medium">Gaurav Photo studio</h6>
          </div>
        </div>

        <!-- title and text area field here -->
        <div class="flex flex-col w-full">
          <div class="flex flex-col w-full my-8">
            <label for="" class="text-sm font-medium">Title</label>
            <input
              type="text"
              class="w-full outline-none border-b-2 border-red-500 text-lg font-medium my-2"
            />
          </div>

          <div class="w-full">
            <textarea
              name="description"
              id="form-description"
              cols="50"
              rows="5"
              class="w-full p-2 border border-gray-500 outline-none ring-1 ring-gray-500 text-lg font-medium my-2 rounded-md"
            >
What's on you mind, Gaurav?</textarea
            >
          </div>
        </div>

        <!-- select image box here -->
        <div
          class="w-full border-4 border-dashed border-gray-500 p-12 my-8 flex justify-center items-center flex-col"
          @dragover.prevent
          @drop="handleDrop"
          :class="{ 'relative-design': isDesign }"
        >
          <div
            class="bg-gray-100 p-4 rounded-full"
            :class="{ 'absolute-design': isDesign }"
          >
            <img
              src="../assets/icons8-photos.gif"
              alt="uploadIcon"
              width="32"
              height="32"
              class="mix-blend-darken rounded-md"
              @click="$refs.fileInput.click()"
              :class="{ 'imageAbsolute-design': isDesign }"
            />
          </div>

          <h2
            class="text-3xl font-semibold text-gray-500"
            :class="{ 'text-design': isDesign }"
          >
            Add Photo
          </h2>

          <h6
            class="text-lg font-semibold text-gray-500"
            :class="{ 'hide-text': isDesign }"
          >
            or Drag & Drop
          </h6>
          <input
            type="file"
            class="hidden"
            ref="fileInput"
            multiple
            @change="handleFileChange"
          />

          <!-- Preview uploaded images -->
          <div
            class="flex flex-wrap justify-center items-center"
            :class="{ 'CustomHeight-dev': isDesign }"
          >
            <div
              v-for="(preview, index) in imagePreviews"
              :key="index"
              class="m-2 relative"
              :class="{ 'everyImage-dev': isDesign }"
            >
              <img :src="preview" alt="Preview" class="w-full h-[19rem]" />
              <button
                class="absolute top-0 right-0 p-1 text-white rounded-full"
                @click="removeImage(index)"
              >
                <!-- <i class="fas fa-times"></i> -->
                <img
                  src="../assets/cros-icon.svg"
                  alt="CrosIcon"
                  width="28"
                  height="28"
                />
              </button>
            </div>
          </div>
        </div>

        <!-- tagpeople and check-in -->
        <div class="w-full flex gap-3">
          <button
            class="w-1/2 border-2 border-gray-500 rounded-md p-2 text-lg font-semibold text-gray-500 flex justify-evenly items-center"
          >
            <img
              src="../assets/icons8-person.gif"
              alt="location"
              width="32"
              height="32"
            />
            <span> Tag People </span>
          </button>
          <button
            class="w-1/2 border-2 border-gray-500 rounded-md p-2 text-lg font-semibold text-gray-500 flex justify-evenly items-center"
          >
            <img
              src="../assets/icons8-location.gif"
              alt="location"
              width="32"
              height="32"
            />
            <span> Check in </span>
          </button>
        </div>

        <!-- final post button -->
        <div class="w-full mt-4">
          <button
            class="bg-red-500 p-2 text-2xl font-semibold text-white w-full rounded-md"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePostModel",

  props: {
    isModalOpen: Boolean,
  },

  data() {
    return {
      isOpenModal: this.isModalOpen,
      imageURL: "",
      imagePreviews: [],

      //   conditionally apply css
      isDesign: false,
    };
  },

  watch: {
    isModalOpen(newValue) {
      this.isOpenModal = newValue;
    },
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },

    closeModalOutside(event) {
      if (!event.target.closest(".bg-white")) {
        this.closeModal();
      }
    },

    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      this.handleFiles(files);
      this.isDesign = true;
    },
    handleFileChange(event) {
      const files = event.target.files;
      this.handleFiles(files);

      this.isDesign = true;
    },
    handleFiles(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.match("image.*")) {
          this.isDesign = true;

          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    },
    removeImage(index) {
      this.imagePreviews.splice(index, 1);

      if (this.imagePreviews.length === 0) {
        this.isDesign = false;
      }
    },
  },
};
</script>

<style scoped>
.relative-design {
  position: relative;
}

.absolute-design {
  position: absolute;
  top: 0;
  left: 0;
  background: whitesmoke;
  width: 35%;
  height: 3rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.6em;
  border-bottom-right-radius: 0.6em;
}

.imageAbsolute-design {
  position: absolute;
  top: 5px !important;
}
.text-design {
  position: absolute;
  top: 0;
  left: 65px;
  font-size: 1em;
}

.hide-text {
  display: none;
}

.CustomHeight-dev {
  height: 23rem;
  overflow: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 8px;
  flex-direction: column;
}
.everyImage-dev {
  width: 100%;
}
</style>
