<template>
  <div class="app__component">
    <button>
      Click

      <MaterialRipple ref="ripple"></MaterialRipple>
    </button>
  </div>
</template>

<script>
  import MaterialRipple from 'components/MaterialRipple'

  export default {
    name: 'app',
    components: {
      MaterialRipple
    }
  }
</script>
