<template>
  <div class="song">
    <div class="song__credits" @click="handleSongChange(song.id)">
      <div class="song__top">{{ song.duration }} | {{ song.artist }}</div>
      <div class="song__bottom">{{ song.title }}</div>
    </div>
    <div class="song__icons">
      <img class="icon" src="@/assets/icons/favorite.svg" alt="favorite" />
      <img class="icon" src="@/assets/icons/share.svg" alt="share" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Song",
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSongChange(item) {
      let vm = this.$parent;
      while (vm) {
        vm.$emit("songChange", item);
        vm = vm.$parent;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.song {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d5de;
  padding-bottom: 20px;
  margin-bottom: 20px;
  justify-content: space-between;

  &__credits {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
  }

  &__top {
    color: #78747f;
    font-size: 1.2rem;
    margin-bottom: 1px;
  }
  &__bottom {
    color: #2f1a4b;
    font-size: 1.6rem;
  }
  .icon {
    cursor: pointer;
  }

  .icon:first-child {
    margin-right: 13px;
  }
}
</style>
