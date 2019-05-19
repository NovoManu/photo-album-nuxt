import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AlbumCard from '@/components/albums/AlbumCard.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('index.vue', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  const wrapper = mount(AlbumCard, {
    propsData: {
      album: {}
    },
    store,
    localVue
  })
  it('renders component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has initial colors', () => {
    expect(wrapper.vm.colors).toBeDefined()
  })
  it('has initial visible', () => {
    expect(wrapper.vm.visible).toBe(false)
  })
  it('getUserById not called by click', () => {
    expect(actions.actionClick).not.toHaveBeenCalled()
  })
})
