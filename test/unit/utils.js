import Vue from 'vue' // runtime

import Basic from './fixtures/Basic'

export function getContainer (Component, Container) {
  Vue.extend(Component)
  const Ctor = Vue.extend(Container)

  const c = new Ctor()
  c.$mount()

  return c.$refs.ripple
}
