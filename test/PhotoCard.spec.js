import { mount } from '@vue/test-utils'
import PhotoCard from '@/components/photos/PhotoCard.vue'

describe('index.vue', () => {
  const wrapper = mount(PhotoCard, {
    propsData: {
      photo: {},
      albumTitle: 'title',
      userName: 'name',
      visible: false
    }
  })
  it('renders component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has initial colors', () => {
    expect(wrapper.vm.dialog).toBe(false)
  })
})
