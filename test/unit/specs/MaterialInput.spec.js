import MaterialRipple from 'components/MaterialRipple'
import {getComponent} from '../utils'

describe('MaterialInput.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialRipple, {})
  })

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
    expect(component.className).to.equal('ripple--white')
  })

  it('handles click with no animation correctly', () => {
    component.handleClick()
    expect(component.isAnimated).to.equal(false)
  })

  it('handles click with animation correctly', () => {
    component.isAnimated = true
    component.handleClick()
    expect(component.isAnimated).to.equal(false)
  })

  // TODO: we need to supply a parent component to the test
  // instance for test to actually work.
})
