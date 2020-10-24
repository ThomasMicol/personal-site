<template>
  <div>
    <NavBar></NavBar>
    <div class="routerView">
      <AppBody></AppBody>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import AppBody from "./components/AppBody.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    AppBody,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.routerView {
  width: 50em;
  padding: 3em;
  margin: 0 auto;
  height: 122vh;
}

.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
