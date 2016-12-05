<template>
  <div class="ripple-example">
    <h1>You can center Material Ripple effect</h1>

    <div class="ripple-centered">
      <button
        type="button"
        class="ripple-centered-button">
          +
      </button>

      <MaterialRipple :center="true" :size="55"></MaterialRipple>
    </div>
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
  .ripple-centered {
    overflow: hidden;
    position: relative;
    display: inline-block;
    padding: 20px;

    .ripple-centered-button {
      background: white;
      border: 1px solid;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 25px;
      user-select: none;

      &:focus, &:active {
        outline: none;
      }
    }

    .material-ripple__component {
      background: orange;

      &.ripple--animation {
        animation: smallripple .5s linear; // runs the animation on element.
      }
    }
  }

  @keyframes smallripple {
    from {
      opacity: .5;
    }
    to {
      opacity: 0;
      transform: scale(1.5);
    }
  }
</style>

