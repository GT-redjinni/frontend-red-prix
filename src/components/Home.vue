<template>
  <div class="">
    <NavBar />
  </div>

  <div class="flex flex-row gap-4 justify-center w-full mt-24">
    <div class="hidden basis-1/5 md:basis-[28%] lg:basis-[20%] md:block my-2">
      <LeftSide />
    </div>

    <div class="basis-10/12 md:basis-2/5 max-sm:basis-[95%] my-2">
      <CreatePost />
    </div>

    <div class="hidden basis-1/5 md:basis-[28%] lg:basis-[20%] md:block my-2">
      <RightSide />
    </div>
  </div>
</template>

<script>
import NavBar from "./navbar/NavBar.vue";
import CreatePost from "./Home-center-content/CreatePost.vue";
import LeftSide from "./side-component/LeftSide.vue";
import RightSide from "./side-component/RightSide.vue";

export default {
  name: "HomePage",

  components: { CreatePost, LeftSide, RightSide, NavBar },
};
</script>

<style scoped></style>
