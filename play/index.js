import { play } from 'vue-play'

import Example from './components/Example.vue'
import Theme from './components/Theme.vue'
import CenteredAnimation from './components/CenteredAnimation.vue'

play('MaterialButton', module)
  .add('example', Example)
  .add('theme', Theme)
  .add('centered', CenteredAnimation)
