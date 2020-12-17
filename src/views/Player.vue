<template>
  <div class="player">
    <Panel />
    <Controls />
  </div>
</template>

<script>
import Controls from "@/components/organisms/Controls.vue";
import Panel from "@/components/organisms/Panel.vue";

export default {
  name: "Player",
  components: {
    Controls,
    Panel
  }
};
</script>

<style lang="scss" scoped>
.player {
  box-shadow: 0 0 10px -6px black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  width: 360px;
  height: 480px;
  background: grey;
}
</style>
