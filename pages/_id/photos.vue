<template>
  <v-layout row wrap>
    <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
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
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Photo } from '~/utils/types'
import PhotoCard from '~/components/photos/PhotoCard.vue'

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
    const { data, headers } = await app.$api.photos.index({
      ...query,
      albumId: params.id
    })
    return {
      photos: data,
      total_count: headers['x-total-count']
    }
  }
})
export default class photos extends Vue {
  photos: Photo[] = []
  total_count: number = 100
  limit: number = 20
  start: number = 0
  get lastPage(): boolean {
    return this.start + this.limit >= this.total_count
  }
  get firstPage(): boolean {
    return this.start - this.limit < 0
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
