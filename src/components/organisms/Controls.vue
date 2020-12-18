<template>
  <div class="controls">
    <div class="controls__left">
      <button class="button button--share">
        <img class="icon" src="@/assets/icons/share.svg" alt="share" />
      </button>
    </div>
    <div class="controls__center">
      <button class="button button--prev">
        <img class="icon" src="@/assets/icons/previous.svg" alt="previous" />
      </button>
      <button class="button button--play">
        <img class="icon" src="@/assets/icons/play.svg" alt="pause" />
      </button>
      <button class="button button--next">
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
  components: {}
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
    }
  }
}
</style>
