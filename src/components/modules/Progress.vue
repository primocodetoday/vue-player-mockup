<template>
  <div class="progress">
    <div class="progress__bar"></div>
    <div class="progress__marker">
      <img class="icon" src="@/assets/icons/audio.svg" alt="volume" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress"
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.progress {
  position: relative;
  background-color: white;
  width: 100%;
  height: 7px;

  &__bar {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: red;
    width: 30%;
  }

  &__marker {
    @include flex-center;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    right: 95px;
    top: 3px;
    height: 22px;
    width: 22px;
    transform: translate(-50%, -50%);
  }
}
</style>
