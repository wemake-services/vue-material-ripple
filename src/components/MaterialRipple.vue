<template>
  <div
    class="ripple__component"
    :class="rippleClass"
    :style="rippleStyle"></div>
</template>

<script>
  export default {
    name: 'material-ripple',
    computed: {
      rippleClass () {
        const classes = [
          this.className
        ]

        if (this.isAnimated) {
          // This class needs to be set every time,
          // otherwise animation will not work:
          classes.push('ripple--animation')
        }

        return classes
      },
      rippleStyle () {
        return {
          top: this.top + 'px',
          left: this.left + 'px',
          width: this.width + 'px',
          height: this.height + 'px'
        }
      }
    },
    data () {
      return {
        isAnimated: false,
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }
    },
    props: {
      className: {
        type: String,
        default: 'ripple--white'
      }
    },
    mounted () {
      // container is not reactive:
      this.container = this.$el.parentNode
      if (!this.container) return // TODO: this is required for tests

      // We support both click and touch events:
      this.container.addEventListener('click', this.handleClick)
      this.container.addEventListener('touch', this.handleClick)
    },
    beforeDestroy () {
      if (!this.container) return // TODO: this is required for tests

      this.container.removeEventListener('click', this.handleClick)
      this.container.removeEventListener('touch', this.handleClick)
    },
    methods: {
      handleClick (event) {
        if (this.isAnimated) {
          // The DOM is not ready yet:
          this.isAnimated = false
          this.$nextTick(() => {
            // But on the next tick it will be ready:
            this.animate(event)
          })
        } else {
          this.animate(event)
        }
      },
      animate (event) {
        // Note, that this component must have a parent:
        if (!this.container) return // this is the actuall logic

        const offset = require('document-offset') // ssr-friendly
        const position = offset(this.container) // polyfill

        // This method works for both click and touch events:
        const inputX = (event.type === 'click')
          ? event.pageX : event.originalEvent.touches[0].pageX
        const inputY = (event.type === 'click')
          ? event.pageY : event.originalEvent.touches[0].pageY

        const size = Math.max(
          this.container.offsetWidth,
          this.container.offsetHeight
        )
        const center = size / 2

        // Mutating the inner state:
        this.isAnimated = true
        this.width = this.height = size
        this.top = inputY - position.top - center
        this.left = inputX - position.left - center
      }
    }
  }
</script>

<style lang="scss">
  .ripple__component {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);

    // Skins:

    &.ripple--black {
      background: rgba(0, 0, 0, .1);
    }

    &.ripple--white {
      background: rgba(255, 255, 255, .4);
    }

    // Animation:

    &.ripple--animation {
      animation: ripple 1s linear,
    }
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(3);
    }
  }
</style>
