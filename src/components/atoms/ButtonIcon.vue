<template>
  <button class="button" :class="classes" :style="styles">
    <img class="button__icon" :src="require(`@/assets/icons/${icon}.svg`)" :alt="`${icon}`" />
  </button>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "white"
    },
    big: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "button--rotate": this.rotate,
        "button--big": this.big
      };
    },
    styles() {
      return {
        backgroundColor: this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.button {
  @include flex-center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: transform 0.3s linear;

  &:hover {
    transform: scale(1.1);
  }

  &--big {
    margin: 0 20px 0 20px;
    width: 50px;
    height: 50px;
  }

  &--rotate {
    transform: rotate(180deg);

    &:hover {
      transform: rotate(180deg) scale(1.1);
    }
  }
}
</style>
