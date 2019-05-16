export interface RootState {
  version: string
}
export const state = (): RootState => ({
  version: '0.1.1'
})
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('users/fetchUsers', null, {
      root: true
    })
  }
}
