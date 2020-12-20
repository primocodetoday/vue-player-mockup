<template>
  <div class="playlist">
    <div class="playlist__top">
      <router-link :to="{ name: 'Player' }">
        <ButtonIcon class="playlist__back" icon="back" />
      </router-link>
      <h1 class="playlist__header">Playlist</h1>
    </div>
    <List />
  </div>
</template>

<script>
import List from "@/components/molecules/List.vue";
import ButtonIcon from "@/components/atoms/ButtonIcon.vue";

export default {
  name: "PlayList",
  components: {
    List,
    ButtonIcon
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.playlist {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f3f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__top {
    @include flex-center;
    width: 100%;
    height: 80px;
  }
  &__header {
    color: #60558f;
    font-weight: bold;
    font-size: 2.2rem;
  }
  &__back {
    position: absolute;
    top: 20px;
    left: 26px;
  }
}
</style>
