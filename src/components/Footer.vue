<template>
  <div class="footer">Footer</div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../assets/baseStyle.scss";

.footer {
  width: 100%;
  height: 7em;
  background-color: $secondary;
  display: grid;
  color: $dark;
}
</style>