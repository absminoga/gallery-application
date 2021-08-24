<template>
  <div id="app">
    <FullImg></FullImg>
    <SlideShow></SlideShow>
    <ArrowShow></ArrowShow>
    <AddImg></AddImg>
  </div>
</template>

<script>
import FullImg from "./components/block-full-img.vue";
import SlideShow from "./components/block-slide-show.vue";
import ArrowShow from "./components/block-arrow-show.vue";
import AddImg from "./components/block-add-img.vue";

export default {
  name: "App",

  components: {
    FullImg,
    SlideShow,
    ArrowShow,
    AddImg,
  },
};
</script>

<style lang="scss">
body {
  height: 100vh;
  font-family: "Arial";
  color: rgb(37, 37, 37);
}
#app {
  width: 80%;
  min-width: 1200px;
  padding: 20px 50px 50px 50px;
  margin: 0 auto;
}
.container {
  margin-bottom: 20px;
}
</style>
