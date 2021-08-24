<template>
  <div class="container add-img">
    <div class="input_wrapper upload_btn">
      <input
        type="file"
        id="input__file"
        @change="getImageFile"
        class="input__file"
        multiple
      />
      <label for="input__file" class="input__file-button">
        <span class="input__file-button-text">Upload new image</span>
      </label>
    </div>
    <div class="upload_btn upload_web" @click="getImage">
      Upload from Flickr
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "add-image",
  methods: {
    ...mapActions(["GET_PHOTOS_FROM_FLICKR", " UPDATE_THUMBNAILS"]),
    getImage() {
      this.GET_PHOTOS_FROM_FLICKR();
    },
    getImageFile(e) {
      let images = e.target.files;
      for (let image of images) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.$store.state.photos.push(e.target.result);
          this.$store.commit("UPDATE_THUMBNAILS");
        };
      }
    },
  },
};
</script>

<style lang="scss">
.add-img {
  direction: flex;
  justify-content: center;
  text-align: center;
  .upload_btn {
    display: inline-block;
    padding: 16px 60px;
    background-color: rgb(37, 37, 37);
    color: #ffffff;
    font-size: 20px;
    border-radius: 40px;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    &:hover {
      background-color: rgb(70, 70, 70);
    }
    &:active {
      background-color: rgb(37, 37, 37);
    }
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  .input__wrapper {
    position: relative;
    width: auto;
  }
  .input__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
}
</style>