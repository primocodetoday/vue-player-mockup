<template>
  <Root />
</template>

<script>
import Root from "@/views/Root.vue";

export default {
  name: "App",
  components: {
    Root
  }
};
</script>

<style lang="scss">
* {
  font-family: "Rambla", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  // happy rems
  font-size: 62.5%;
}

body {
  font-size: 1.6em;
}
</style>
