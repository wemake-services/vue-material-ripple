<template>
  <div class="ripple-example">
    <h1>You can place Material Ripple effect on any other component</h1>
    <button type="button" class="ripple-example-button">
      Button
      <MaterialRipple></MaterialRipple>
    </button>

    <hr>

    <div class="ripple-example-div">
      This is a div
      <MaterialRipple></MaterialRipple>
    </div>

    <hr>

    <div>
      <a class="ripple-example-a">
        This is a link
        <MaterialRipple></MaterialRipple>
      </a>
    </div>
  </div>
</template>

<script>
  import MaterialRipple from '../../src/components/MaterialRipple.vue'

  module.exports = {
    name: 'material-ripple-examples',
    components: {
      MaterialRipple
    }
  }
</script>

<style lang="sass">
  %base-example {
    background: orange;
    color: white;

    padding: 0.75em 2em;

    position: relative;
    overflow: hidden;
    transform: translate(0);
  }

  .ripple-example-button {
    @extend %base-example;

    font-size: 18px;
    outline: none;
    border: none;
  }

  .ripple-example-div {
    @extend %base-example;
  }

  .ripple-example-a {
    @extend %base-example;
    display: block;
  }
</style>
