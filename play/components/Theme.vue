<template>
  <div class="ripple-example">
    <h1>You can customize Material Ripple effect</h1>
    <button
      type="button"
      class="ripple-customization-button button--white ripple--black">
        Button
        <MaterialRipple></MaterialRipple>
    </button>

    <hr>

    <button
      type="button"
      class="ripple-customization-button button--orange ripple--white">
        Button
        <MaterialRipple></MaterialRipple>
    </button>

    <hr>

    <button
      type="button"
      class="ripple-customization-button button--white ripple--orange">
        Button
        <MaterialRipple></MaterialRipple>
    </button>
</template>

<script>
  import MaterialRipple from '../../src/components/MaterialRipple.vue'

  module.exports = {
    name: 'material-ripple-customization',
    components: {
      MaterialRipple
    }
  }
</script>

<style lang="sass">
  .ripple-example {
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
  }

  // Custom styling

  .material-ripple__component {
    .ripple--black & {
      background-color: rgba(0, 0, 0, .1);
    }

    .ripple--orange & {
      background-color: orange;
    }
  }
</style>
