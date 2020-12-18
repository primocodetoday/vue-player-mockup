<template>
  <div class="title">
    <div class="title__wrapper">
      <p class="title__artist">{{ current.artist }}</p>
      <p class="title__song">{{ current.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    current: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.title {
  @include flex-center;
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 65px;
  background-color: rgba(42, 34, 77, 0.6);

  &__wrapper {
    color: white;
  }
  &__artist {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2px;
  }
  &__song {
    text-align: center;
    font-size: 1.4rem;
  }
}
</style>
