<template>
  <div id="app" class="app">
    <Player />
  </div>
</template>

<script>
import Player from "./views/Player.vue";

export default {
  name: "App",
  data() {
    return {
      songs: [
        { id: 1, artist: "Icona Pop", title: "Still Don’t Know", duration: "3:16", isFav: false },
        { id: 2, artist: "Icona Pop", title: "I Love It", duration: "2:35", isFav: false },
        { id: 3, artist: "Icona Pop", title: "Girlfriend", duration: "2:50", isFav: false },
        { id: 4, artist: "Icona Pop", title: "We Got the World", duration: "3:07", isFav: false },
        { id: 5, artist: "Icona Pop", title: "Nights Like This", duration: "3:24", isFav: false }
      ]
    };
  },

  components: {
    Player
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rambla:wght@400;700&display=swap");
@import "./styles/_mixins.scss";

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
