<template>
  <div class="top">
    <div class="top__center">
      <img class="top__icon" src="@/assets/icons/continue.svg" alt="continue" />
      <img class="top__icon" src="@/assets/icons/shuffle.svg" alt="shuffle" />
      <img class="top__icon" src="@/assets/icons/repeat.svg" alt="repeat" />
    </div>
    <router-link :to="{ name: 'Playlist' }">
      <div class="burger">
        <div class="burger__element"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TopControls"
};
</script>

<style lang="scss" scoped>
.top {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 65px;
  background: rgba(42, 34, 77, 0.6);

  &__center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__icon {
    margin-right: 25px;
    filter: invert(0%) sepia(6%) saturate(391%) hue-rotate(280deg) brightness(120%);
    cursor: pointer;
    transition: transform 0.2s linear;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .burger {
    position: absolute;
    right: 20px;
    top: 32px;
    height: 13px;
    width: 16px;
    cursor: pointer;
    transition: transform 0.2s linear;
    &:after {
      content: "";
      position: absolute;
      background: transparent;
      height: 30px;
      width: 30px;
      top: -12px;
      left: -7px;
    }

    &:hover {
      transform: scale(1.15);
    }

    &__element {
      background-color: #707070;
      height: 2.6px;
      width: 16px;

      &:before,
      &:after {
        position: absolute;
        content: "";
        height: 2.6px;
        width: 16px;
        background-color: #707070;
      }

      &:before {
        left: 0px;
        top: 6px;
      }
      &:after {
        left: 0px;
        top: -6px;
      }
    }
  }
}
</style>
