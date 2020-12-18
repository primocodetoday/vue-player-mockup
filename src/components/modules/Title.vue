<template>
  <div class="title">
    <div class="title__wrapper">
      <p class="title__artist">Icona Pop</p>
      <p class="title__song">Still Don't Know</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title"
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
  background: rgba(42, 34, 77, 0.6);

  &__wrapper {
    color: white;
  }
  &__artist {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2px;
  }
  &__song {
    font-size: 1.4rem;
  }
}
</style>
