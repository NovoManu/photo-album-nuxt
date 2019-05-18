<template>
  <v-layout row wrap>
    <v-flex xs12>
      <span class="my-title lg">{{ album.title }}</span>
      <div class="my-subtitle">by {{ user.name }}</div>
    </v-flex>
    <PhotoCard
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      :albumTitle="album.title"
      :userName="user.name"
    />
    <photo-album-pagination
      v-model="limit"
      :firstPage="firstPage"
      :lastPage="lastPage"
      @increment="increment"
      @decrement="decrement"
    />
  </v-layout>
</template>
<script lang="ts">
import { Component, Vue, Watch, namespace } from 'nuxt-property-decorator'
import { Photo, User, Album } from '~/utils/types'
import PhotoCard from '~/components/photos/PhotoCard.vue'

const UsersModule = namespace('users')

@Component({
  name: 'Photos',
  head() {
    return {
      title: 'Photos Album: photos'
    }
  },
  components: {
    PhotoCard
  },
  async asyncData({ app, query, params }) {
    if (!query._limit) (query._limit as string) = '20'
    const album = await app.$api.albums.show(params.id)
    const { data, headers } = await app.$api.photos.index({
      ...query,
      albumId: params.id
    })
    return {
      photos: data,
      album: album.data,
      total_count: headers['x-total-count']
    }
  }
})
export default class photos extends Vue {
  @UsersModule.Getter getUserById!: any
  photos: Photo[] = []
  album: Album | null = null
  total_count: number = 100
  limit: number = 20
  start: number = 0
  get lastPage(): boolean {
    return this.start + this.limit >= this.total_count
  }
  get firstPage(): boolean {
    return this.start - this.limit < 0
  }
  get user(): User | {} {
    return this.getUserById((this.album as Album).userId) || {}
  }
  increment() {
    if (this.lastPage) return
    this.start += this.limit
    this.fetchNewData()
  }
  decrement() {
    if (this.firstPage) return
    this.start -= this.limit
    this.fetchNewData()
  }
  async fetchNewData() {
    const params = {
      _limit: this.limit,
      _start: this.start,
      albumId: this.$nuxt.$route.params.id
    }
    const { data } = await this.$api.photos.index(params)
    this.photos = data
  }
  @Watch('limit')
  onLimitChanged() {
    this.fetchNewData()
  }
}
</script>
