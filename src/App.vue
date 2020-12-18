<template>
  <div id="app" class="app">
    <div class="container">
      <transition name="slide">
        <router-view
          :songs="songs"
          :current="currentSong"
          @songChange="handleSongChange"
          @songNext="handleSongNext"
        ></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
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
      ],
      currentId: 1
    };
  },
  computed: {
    currentSong() {
      return this.songs[this.currentId - 1];
    }
  },
  methods: {
    handleSongChange(id) {
      this.currentId = id;
    },
    handleSongNext(nb) {
      if (this.currentId + nb >= 1 && this.currentId + nb < this.songs.length + 1) {
        this.currentId += nb;
      }
    }
  },
  components: {}
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

  .container {
    box-shadow: 0 0 10px -6px black;
    overflow: hidden;
    border-radius: 30px;
    width: 360px;
    height: 480px;
  }
}

.slide-enter-active {
  transition: all 0.3s linear;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
}
</style>
