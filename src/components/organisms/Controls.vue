<template>
  <div class="controls">
    <div class="controls__left">
      <ButtonIcon icon="share" />
    </div>
    <div class="controls__center">
      <ButtonIcon icon="previous" color="#60558f" @click.native="handlePrev" />
      <ButtonIcon v-if="isPlaying" icon="play" big color="#60558f" @click.native="handlePlay" />
      <ButtonIcon v-else icon="pause" big color="#60558f" @click.native="handlePlay" />
      <ButtonIcon icon="previous" rotate color="#60558f" @click.native="handleNext" />
    </div>
    <div class="controls__right">
      <ButtonIcon icon="favorite" />
    </div>
  </div>
</template>

<script>
import ButtonIcon from "@/components/atoms/ButtonIcon.vue";

export default {
  name: "Controls",
  components: { ButtonIcon },
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    handlePlay() {
      this.isPlaying = !this.isPlaying;
    },
    handleNext() {
      this.$store.commit("nextSong");
    },
    handlePrev() {
      this.$store.commit("prevSong");
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
}
</style>
