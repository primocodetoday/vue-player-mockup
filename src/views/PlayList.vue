<template>
  <div class="playlist">
    <Panel />
    <Progress />
    <Controls />
  </div>
</template>

<script>
export default {
  name: "PlayList"
};
</script>

<style lang="scss" scoped>
.playlist {
  box-shadow: 0 0 10px -6px black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  width: 360px;
  height: 480px;
}
</style>
