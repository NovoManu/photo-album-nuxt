import { mount } from '@vue/test-utils'
import Pagination from '@/components/ui/Pagination.vue'

describe('Pagination.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Pagination)
    expect(wrapper.element).toMatchSnapshot()
  })
})
