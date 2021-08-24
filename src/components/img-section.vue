<template>
  <div class="img" @click="showFullImage">
    <div class="img_line">
      <v-icon class="basket" @click="deleteImage" ref="image"
        >far fa-trash-alt</v-icon
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    index: Number,
  },
  methods: {
    ...mapActions(["UPDATE_THUMBNAILS"]),
    deleteImage() {
      const imageIndex = this.$store.state.currentPage * 9 + this.index;
      this.$store.state.photos.splice(imageIndex, 1);
      this.$store.commit("UPDATE_THUMBNAILS");
      if (this.$store.state.thumbnails.length == 0) {
        this.$store.commit("DECRIMENT_CURRENT_PAGE");
      }
    },
    showFullImage() {
      this.$store.state.currentIndex = this.index;
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.far {
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
}
</style>