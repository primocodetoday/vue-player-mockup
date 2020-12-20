import Vue from "vue";
import VueRouter from "vue-router";
import Player from "@/views/Player.vue";
import PlayList from "@/views/PlayList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/player"
  },
  {
    path: "/player",
    name: "Player",
    component: Player
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: PlayList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
