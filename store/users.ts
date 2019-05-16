import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '~/store'
import { UsersState, User } from '~/utils/types'

const state = () => ({
  users: []
})

const mutations: MutationTree<UsersState> = {
  fetchUsers(state, users: User[]) {
    state.users = users
  }
}

const actions: ActionTree<UsersState, RootState> = {
  async fetchUsers({ commit }) {
    const { data } = await (this as any).$api.users.index()
    commit('fetchUsers', data)
  }
}

export const getters: GetterTree<UsersState, RootState> = {
  getUserById: (state: UsersState) => id =>
    state.users.find((user: User) => user.id === id)
}

const users: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default users
