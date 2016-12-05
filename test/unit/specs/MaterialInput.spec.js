import Vue from 'vue'
import simulant from 'simulant'

import MaterialRipple from 'components/MaterialRipple'
import Basic from '../fixtures/Basic'
import { getContainer } from '../utils'

describe('MaterialRipple.vue', () => {
  let component

  beforeEach(() => {
    component = getContainer(MaterialRipple, Basic)
  })

  // Default data:

  it('has correct default data', () => {
    const data = MaterialRipple.data()
    assert.deepEqual(
      data,
      {
        isAnimated: false,
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }
    )
  })

  it('has correct default props', () => {
    expect(component.center).to.equal(false)
    expect(component.size).to.equal(null)
  })

  // Computed:

  it('has correct computedClasses', () => {
    expect(component.computedClasses).to.deep.equal({
      'ripple--animation': false
    })
  })

  it('has correct computedStyles', () => {
    expect(component.computedStyles).to.deep.equal({
      top: '0px',
      left: '0px',
      width: '0px',
      height: '0px'
    })
  })

  // Handlers:

  it('handles click correctly', () => {
    component.getDocumentOffset = () => {
      return {top: 0, left: 0}
    }

    const event = simulant('click')
    component.handleClick(event)
    expect(component.isAnimated).to.equal(true)
  })

  it('handles click correctly while animation', (done) => {
    component.test = false
    component.animate = (_) => {
      component.test = true
    }

    component.isAnimated = true
    component.handleClick()

    expect(component.isAnimated).to.equal(false)

    Vue.nextTick(() => {
      expect(component.test).to.equal(true)

      done()
    })
  })
})
