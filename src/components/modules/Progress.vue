<template>
  <div class="progress">
    <div class="progress__bar"></div>
  </div>
</template>

<script>
export default {
  name: "Progress"
};
</script>

<style lang="scss" scoped>
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
}
</style>
