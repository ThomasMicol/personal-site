<template>
  <div class="nav" sticky-container>
    <div class="link-wrapper" v-sticky>
      <router-link class="route-link" to="/">Thomas Micol</router-link>
      <div></div>
      <router-link class="route-link" to="/about">about</router-link>
      <router-link class="route-link" to="/projects">projects</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style lang="scss">
@import "../assets/baseStyle.scss";

.nav {
  width: 100%;
  height: 3em;
  background-color: $primary;
  display: grid;
}

.link-wrapper {
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 4fr 1fr 1fr 1fr;
  place-self: center;
}

.route-link {
  font-size: 1.4em;
}

.route-link {
  color: $dark;
  text-decoration: none;
  font-family: "DM Mono", monospace;
}
</style>