<template>
  <div class="container">
    <TopOptions />
    <Title />
  </div>
</template>

<script>
import TopOptions from "@/components/molecules/TopOptions.vue";
import Title from "@/components/molecules/Title.vue";

export default {
  name: "Panel",
  components: {
    TopOptions,
    Title
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 340px;
  width: 100%;
  align-self: flex-start;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 412px 412px;
  background-image: url("../../assets/images/icona_pop.webp");
  filter: saturate(1) opacity(0.8);
}
</style>
