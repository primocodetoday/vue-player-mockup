import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [
      { id: 1, artist: "Icona Pop", title: "Still Don’t Know", duration: "3:16", isFav: false },
      { id: 2, artist: "Icona Pop", title: "I Love It", duration: "2:35", isFav: false },
      { id: 3, artist: "Icona Pop", title: "Girlfriend", duration: "2:50", isFav: false },
      { id: 4, artist: "Icona Pop", title: "We Got the World", duration: "3:07", isFav: false },
      { id: 5, artist: "Icona Pop", title: "Nights Like This", duration: "3:24", isFav: false }
    ],
    currentId: 1
  },
  getters: {
    getCurrentSong: state => {
      return state.songs[state.currentId - 1];
    }
  },
  mutations: {
    nextSong(state) {
      if (state.currentId < state.songs.length) {
        state.currentId++;
      }
    },
    prevSong(state) {
      if (state.currentId > 1) {
        state.currentId--;
      }
    },
    changeSong(state, id) {
      state.currentId = id;
    }
  }
});
