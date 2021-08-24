<template>
  <div class="container slide-show-container">
    <div class="white_field"></div>
    <div class="slide-show">
      <sectionImage
        v-for="(thumbnail, index) in this.$store.state.thumbnails"
        :key="index"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
        v-bind:index="index"
        :class="[isActive(index) ? activeClass : inactiveClass]"
      ></sectionImage>
    </div>
    <div class="white_field"></div>
  </div>
</template>

<script>
import sectionImage from "./img-section.vue";
import { mapActions } from "vuex";

export default {
  name: "slide-show",
  data() {
    return {
      activeClass: "active_image",
      inactiveClass: "inactive_image",
    };
  },
  components: {
    sectionImage,
  },
  methods: {
    ...mapActions(["UPDATE_THUMBNAILS"]),
    isActive(index) {
      return this.$store.state.currentIndex == index;
    },
  },
  mounted() {
    this.UPDATE_THUMBNAILS();
  },
};
</script>

<style lang="scss">
.slide-show-container {
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  height: calc(15vh - 20px);
  grid-gap: 20px;
  .slide-show {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 10px;
    .img {
      position: relative;
      transform: scale(1);
      transition: transform 0.3s linear;
      &:hover {
        transform: scale(1.05);
      }
      &:hover .img_line {
        opacity: 1;
      }
      .img_line {
        position: absolute;
        bottom: 0;
        padding: 10px 12px;
        width: 100%;
        background-color: #0000007e;
        text-align: right;
        opacity: 0;
        transition: opacity 0.6s ease-in-out;
      }
    }
    .active_image {
      border: 3px solid rgb(255, 0, 0);
      transform: scale(1.05);
    }
    .inactive_image {
      border: 1px solid rgb(48, 48, 48);
    }
  }
}
</style>
