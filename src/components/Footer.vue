<template>
  <div class="footer-container">
    <div class="footer-content-wrapper">
      <div class="footer-content-column">
        <div class="footer-content-container">
          this is some content to the left
        </div>
      </div>
      <div class="footer-content-column">
        <div class="footer-content-container">
          this is some contnet in the middle
        </div>
      </div>
      <div class="footer-content-column last grid">
        <div class="footer-content-container footer-call-to-action">
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    let asd = () => {
      this.methods.assss();
    };
  },
  methods: () => {
    assss = () => {};
  },
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

.footer-content-column {
  padding: 1em;

  .last {
    display: grid;
  }
}

.footer-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .footer-call-to-action {
    place-self: center;

    button {
      color: $light;
      background-color: $highlight;
      outline: 0;

      height: 2.3em;
      width: 10em;
      border: 0px;
    }
  }
}
</style>