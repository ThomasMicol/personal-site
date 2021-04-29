<template>
  <div></div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "StockTicker",
  data: function () {
    return {};
  },
  methods: {
    loadTickerInformation() {
      axios.get("/api/stockticker/");
    },
  },
  mounted() {
    this.loadTickerInformation();
  },
};
</script>

<style>
</style>