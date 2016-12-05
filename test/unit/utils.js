import Vue from 'vue' // runtime

import Basic from './fixtures/Basic'

export function getComponent (Component, propsData) {
  const Ctor = Vue.extend(Component)
  return new Ctor({ propsData }).$mount()
}

export function getContainer (Component, Container) {
  Vue.extend(Component)
  const Ctor = Vue.extend(Container)

  const c = new Ctor()
  c.$mount()

  return c.$refs.ripple
}
