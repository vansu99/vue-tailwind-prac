import Card from '../card'
import { shallowMount, mount } from '@vue/test-utils'

describe('Card', () => {
  it('should render card', () => {
    const wrapper = mount(Card)
    console.log(wrapper.text())
    const wrapperOptions = {
      propsData: {
        product: {}
      }
    }

    // beforeEach(() => {
    //   wrapper = shallowMount(Card, wrapperOptions)
    // })
    //
    // afterEach(() => {
    //   wrapper.vm.$destroy()
    // })
  })
})
