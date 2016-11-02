# vue-material-ripple

[![Build Status](https://travis-ci.org/wemake-services/vue-material-ripple.svg?branch=master)](https://travis-ci.org/wemake-services/vue-material-ripple) [![Coverage Status](https://coveralls.io/repos/github/wemake-services/vue-material-ripple/badge.svg?branch=master)](https://coveralls.io/github/wemake-services/vue-material-ripple?branch=master)

Simple material ripple effect wrapped in a component.

## Installation

```bash
npm install vue-material-ripple
```

## Usage

```vue
<template>
  <div class="ripple-examples__component">
    <h1>You can place Material Ripple effect on any other component</h1>

    <button type="button" class="ripple-example-button">
      Button
      <MaterialRipple></MaterialRipple>
    </button>
  </div>
</template>

<script>
  import MaterialRipple from 'vue-material-ripple'

  module.exports = {
    name: 'material-ripple-examples',
    components: {
      MaterialRipple
    }
  }
</script>
```

For more examples, please check [`/dev`](https://github.com/wemake-services/vue-material-ripple/tree/master/dev) folder and the [project's website](http://wemake.services/vue-material-ripple).
