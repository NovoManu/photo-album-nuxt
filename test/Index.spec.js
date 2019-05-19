import { mount, shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'
jest.mock('axios')

describe('index.vue', () => {
  const wrapper = mount(Index)
  it('renders component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has initial total_count of 100', () => {
    expect(wrapper.vm.total_count).toEqual(100)
  })
  it('has initial limit of 20', () => {
    expect(wrapper.vm.limit).toEqual(20)
  })
  it('has initial start of 0', () => {
    expect(wrapper.vm.start).toEqual(0)
  })
  it('increment count by 20', () => {
    wrapper.vm.increment()
    expect(wrapper.vm.start).toEqual(20)
  })
  it('decrement count by 20', () => {
    wrapper.setData({
      start: 20
    })
    wrapper.vm.decrement()
    expect(wrapper.vm.start).toEqual(0)
  })
  it('prevent decrement below 0', () => {
    wrapper.vm.decrement()
    expect(wrapper.vm.start).toEqual(0)
  })
  it('prevent increment above total_count', () => {
    wrapper.setData({
      start: 80
    })
    wrapper.vm.increment()
    expect(wrapper.vm.start).toEqual(80)
  })
  it('fetch data', () => {
    const wrapper = shallowMount(Index)
    wrapper.vm.fetchNewData()
    expect(wrapper.vm.albums).toEqual([])
  })
})
