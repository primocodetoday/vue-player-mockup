<template>
  <div class="playlist">
    <div class="playlist__top">
      <router-link :to="{ name: 'Player' }">
        <button class="button button--back">
          <img class="icon" src="@/assets/icons/back.svg" alt="back" />
        </button>
      </router-link>
      <h1 class="playlist__header">Playlist</h1>
    </div>
    <List />
  </div>
</template>

<script>
import List from "@/components/molecules/List.vue";

export default {
  name: "PlayList",
  components: {
    List
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
}
.button {
  @include flex-center;
  background-color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 20px;
  left: 26px;
}
</style>
