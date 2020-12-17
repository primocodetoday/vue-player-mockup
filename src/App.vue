<template>
  <div id="app" class="app">
    <Player />
  </div>
</template>

<script>
import Player from "./views/Player.vue";

export default {
  name: "App",

  components: {
    Player
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rambla:wght@400;700&display=swap");
@import "./styles/mixins.scss";

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

.app {
  @include flex-center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-image: url("./assets/images/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
