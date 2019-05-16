import { NuxtAxiosInstance } from '~/node_modules/@nuxtjs/axios'

export default class BaseEndpoint {
  readonly axios
  readonly resource
  constructor(axios: NuxtAxiosInstance, resource: string) {
    this.axios = axios
    this.resource = resource
  }
  async index(params) {
    const { data, headers } = await this.axios.get(this.resource, { params })
    return { data, headers }
  }
}
