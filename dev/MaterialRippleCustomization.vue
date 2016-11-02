<template>
  <div class="ripple-customization__component">
    <a href="#">back</a>
    <h1>You can customize Material Ripple effect</h1>
    <button type="button" class="ripple-customization-button button--white">
      Button
      <MaterialRipple className="ripple--black"></MaterialRipple>
    </button>

    <hr>

    <button type="button" class="ripple-customization-button button--orange">
      Button
      <MaterialRipple className="ripple--white"></MaterialRipple>
    </button>

    <hr>

    <button type="button" class="ripple-customization-button button--white">
      Button
      <MaterialRipple className="ripple--custom"></MaterialRipple>
    </button>
</template>

<script>
  import MaterialRipple from '../src/components/MaterialRipple.vue'

  module.exports = {
    name: 'material-ripple-customization',
    components: {
      MaterialRipple
    }
  }
</script>

<style lang="scss">
  .ripple-customization__component {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    .ripple-customization-button {
      padding: 0.75em 2em;

      position: relative;
      overflow: hidden;
      transform: translate(0);

      box-shadow: 0 0 0.25em rgba(0,0,0,0.5);

      &.button--white {
        color: orange;
        background-color: white;
      }

      &.button--orange {
        color: white;
        background-color: orange;
      }

      font-size: 18px;
      outline: none;
      border: none;
    }

    // Custom styling
    .ripple--custom {
      background-color: orange;
    }
  }
</style>
