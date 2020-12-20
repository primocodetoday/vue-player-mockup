<template>
  <div class="list">
    <ul v-for="(song, idx) in elements" :key="idx">
      <Song :song="song" />
    </ul>
  </div>
</template>

<script>
import Song from "@/components/atoms/Song.vue";

export default {
  name: "List",
  components: {
    Song
  },
  computed: {
    elements() {
      return this.$store.state.songs;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 280px;
}
</style>
