import Vue from 'vue'
import { NuxtAxiosInstance } from '~/node_modules/@nuxtjs/axios'
import BaseEndpoint from '~/utils/api.ts'

export class BackendApi {
  readonly axios
  readonly albums
  readonly photos
  readonly users
  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios
    this.albums = new BaseEndpoint(this.axios, '/albums')
    this.photos = new BaseEndpoint(this.axios, '/photos')
    this.users = new BaseEndpoint(this.axios, '/users')
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
}
export default ({ $axios }, inject) => {
  const api = new BackendApi($axios)
  inject('api', api)
}
