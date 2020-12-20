<template>
  <div class="app">
    <div class="container">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rambla:wght@400;700&display=swap");
@import "./styles/_mixins.scss";

.app {
  @include flex-center;
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
