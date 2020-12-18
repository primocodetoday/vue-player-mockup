<template>
  <div class="controls">
    <div class="controls__left">
      <button class="button button--share">
        <img class="icon" src="@/assets/icons/share.svg" alt="share" />
      </button>
    </div>
    <div class="controls__center">
      <button class="button button--prev" @click="handleNext(-1)">
        <img class="icon" src="@/assets/icons/previous.svg" alt="previous" />
      </button>
      <button class="button button--play" @click="handlePlay">
        <img v-if="!isPlaying" class="icon" src="@/assets/icons/play.svg" alt="pause" />
        <img v-else class="icon" src="@/assets/icons/pause.svg" alt="pause" />
      </button>
      <button class="button button--next" @click="handleNext(1)">
        <img class="icon" src="@/assets/icons/previous.svg" alt="next" />
      </button>
    </div>
    <div class="controls__right">
      <button class="button button--like">
        <img class="icon" src="@/assets/icons/favorite.svg" alt="favorite" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  components: {},
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    handlePlay() {
      this.isPlaying = !this.isPlaying;
    },
    handleNext(choose) {
      let vm = this.$parent;
      while (vm) {
        vm.$emit("songNext", choose);
        vm = vm.$parent;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.controls {
  align-self: flex-end;
  display: flex;
  height: 140px;
  width: 100%;
  background-color: #eeeff5;

  &__left {
    @include flex-center;
    flex: 1 1 50px;
  }

  &__center {
    @include flex-center;
    flex: 3 3 150px;
  }
  &__right {
    @include flex-center;
    flex: 1 1 50px;
  }

  .button {
    @include flex-center;
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition: transform 0.3s linear;
    &:hover {
      transform: scale(1.1);
    }

    &--prev,
    &--play,
    &--next {
      @include flex-center;
      color: white;
      background-color: #60558f;
    }

    &--play {
      margin: 0 20px 0 20px;
      width: 50px;
      height: 50px;
    }

    &--next {
      transform: rotate(180deg);

      &:hover {
        transform: rotate(180deg) scale(1.1);
      }
    }
  }
}
</style>
