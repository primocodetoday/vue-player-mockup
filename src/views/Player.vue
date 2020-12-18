<template>
  <div class="player">
    <Panel :current="current" />
    <Progress />
    <Controls />
  </div>
</template>

<script>
import Controls from "@/components/organisms/Controls.vue";
import Panel from "@/components/organisms/Panel.vue";
import Progress from "@/components/molecules/Progress.vue";

export default {
  name: "Player",
  components: {
    Controls,
    Panel,
    Progress
  },
  props: {
    current: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.player {
  display: flex;
  flex-direction: column;
}
</style>
