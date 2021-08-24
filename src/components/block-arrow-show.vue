<template>
  <div class="container show-arrow">
    <div class="arrow arrow_left" @click="previousPage">
      <v-icon :class="[isFirstPage ? disabled : '']"
        >fas fa-chevron-left</v-icon
      >
    </div>
    <div class="nav_page">
      <span class="score-page">{{ this.$store.state.currentPage + 1 }}</span>
      <span class="divider"> / </span>
      <span class="score-page">{{
        Math.max(1, Math.ceil(this.$store.state.photos.length / 9))
      }}</span>
    </div>
    <div class="arrow arrow_right" @click="nextPage">
      <v-icon :class="[isLastPage ? disabled : '']"
        >fas fa-chevron-right</v-icon
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "show-arrow",
  data() {
    return {
      disabled: "disabled",
    };
  },
  methods: {
    ...mapActions(["INCRIMENT_CURRENT_PAGE", "DECRIMENT_CURRENT_PAGE"]),
    nextPage() {
      this.INCRIMENT_CURRENT_PAGE();
    },
    previousPage() {
      this.DECRIMENT_CURRENT_PAGE();
    },
  },
  computed: {
    isLastPage() {
      const maxPage = Math.ceil(this.$store.state.photos.length / 9);
      return this.$store.state.currentPage == maxPage - 1;
    },
    isFirstPage() {
      return this.$store.state.currentPage == 0;
    },
  },
};
</script>

<style lang="scss">
.show-arrow {
  display: flex;
  justify-content: center;
  .arrow {
    vertical-align: baseline;
    i {
      font-size: 45px;
      color: rgb(37, 37, 37);
      cursor: pointer;
      transition: color 0.5s ease-in-out;
    }
    .disabled {
      opacity: 0.33;
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
  div:not(:last-child) {
    margin-right: 90px;
  }
  .nav_page {
    font-size: 45px;
    font-weight: bold;
    span:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>