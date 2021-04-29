<template>
  <div class="body-wrapper">
    <div class="body-header">Thomas Micol | Full Stack Developer</div>
    <div class="home-content-wrapper">
      <div class="home-content-division">
        this is some more content we will see how this displays
      </div>
      <div class="home-content-division">
        This is some text for the home page component div 2
      </div>
    </div>
    <StockTicker name="jeff"></StockTicker>
  </div>
</template>

<script>
import StockTicker from "./stock-ticker/StockTicker";

export default {
  name: "home",
  components: {
    StockTicker,
  },
};
</script>

<style lang="scss">
.home-content-division {
  width: 30em;
  padding: 1em;
  margin: 2em 0;
}
</style>