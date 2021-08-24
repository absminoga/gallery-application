<template>
  <div class="container full_img">
    <div class="arrow arrow_left" @click="previousImage">
      <v-icon :class="[isFirstImage ? disabled : '']"
        >fas fa-chevron-left</v-icon
      >
    </div>
    <div
      class="block_image"
      :style="{
        backgroundImage: `url('${
          this.$store.state.thumbnails[this.$store.state.currentIndex]
        }')`,
      }"
    ></div>
    <div class="arrow arrow_right" @click="nextImage">
      <v-icon :class="[isLastImage ? disabled : '']"
        >fas fa-chevron-right</v-icon
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "full-image",
  data() {
    return {
      disabled: "disabled",
    };
  },
  computed: {
    isLastImage() {
      const maxPage = Math.ceil(this.$store.state.photos.length / 9);
      return (
        this.$store.state.currentPage == maxPage - 1 &&
        this.$store.state.currentIndex ==
          this.$store.state.thumbnails.length - 1
      );
    },
    isFirstImage() {
      return (
        this.$store.state.currentPage == 0 &&
        this.$store.state.currentIndex == 0
      );
    },
  },

  methods: {
    ...mapActions(["INCRIMENT_CURRENT_INDEX", "DECRIMENT_CURRENT_INDEX"]),
    previousImage() {
      this.DECRIMENT_CURRENT_INDEX();
    },
    nextImage() {
      this.INCRIMENT_CURRENT_INDEX();
    },
  },
};
</script>

<style lang="scss">
.full_img {
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  grid-gap: 20px;
  align-items: center;
  .arrow {
    i {
      font-size: 50px;
      color: rgb(37, 37, 37);
      cursor: pointer;
      transition: color 0.5s ease-in-out;
    }
    &:hover {
      i {
        color: rgb(70, 70, 70);
      }
    }
    &:active {
      i {
        color: rgb(37, 37, 37);
      }
    }
  }
  .arrow_left {
    text-align: right;
  }
  .disabled {
    opacity: 0.33;
  }
  .block_image {
    height: 100%;
    border: 1px solid rgb(48, 48, 48);
    min-width: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
