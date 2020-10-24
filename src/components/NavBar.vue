<template>
  <div class="nav">
    <div class="link-wrapper">
      <router-link class="route-link" to="/home">home</router-link>
      <router-link class="route-link" to="/about">about</router-link>
      <router-link class="route-link" to="/projects">projects</router-link>
      <router-link class="route-link" to="/contact">contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 7em;
  background-color: #212227;
  display: grid;
}

.link-wrapper {
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-self: center;
}

.route-link {
  font-size: 2em;
}

.route-link {
  color: #d3d0cb;
  text-decoration: none;
  font-family: "DM Mono", monospace;
}
</style>