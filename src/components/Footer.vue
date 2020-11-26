<template>
  <div class="footer-container">Footer</div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../assets/baseStyle.scss";

.footer-container {
  width: 100%;
  height: 7em;
  background-color: $secondary;
  display: grid;
  color: $dark;
}
</style>