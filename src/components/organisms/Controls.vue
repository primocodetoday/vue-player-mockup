<template>
  <div class="controls">
    <div class="controls__left">
      <div class="controls__share">
        <img class="icon__share" src="@/assets/icons/share.svg" alt="share" />
      </div>
    </div>
    <div class="controls__center">
      <div class="controls__prev">
        <img class="icon__share" src="@/assets/icons/previous.svg" alt="previous" />
      </div>
      <div class="controls__play">
        <img class="icon__share" src="@/assets/icons/play.svg" alt="pause" />
      </div>
      <div class="controls__next">
        <img class="icon__share" src="@/assets/icons/previous.svg" alt="next" />
      </div>
    </div>
    <div class="controls__right">
      <div class="controls__like"><img class="icon__share" src="@/assets/icons/favorite.svg" alt="favorite" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls"
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

  &__share,
  &__like {
    @include flex-center;
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  &__center {
    @include flex-center;
    flex: 3 3 150px;
  }
  &__right {
    @include flex-center;
    flex: 1 1 50px;
  }

  &__prev,
  &__play,
  &__next {
    @include flex-center;
    color: white;
    background-color: #60558f;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  &__play {
    margin: 0 20px 0 20px;
    width: 50px;
    height: 50px;
  }

  &__next {
    transform: rotate(180deg);
  }
}
</style>
