const { mount } = require('@vue/test-utils')
const Logo = require('@/components/Logo.vue')

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
