<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <div class="my-title lg">Albums</div>
      <div class="my-subtitle">Make memories</div>
    </v-flex>
    <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
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
import { Album } from '~/utils/types'
import AlbumCard from '~/components/albums/AlbumCard.vue'

@Component({
  name: 'Albums',
  head() {
    return {
      title: 'Photo Album'
    }
  },
  components: {
    AlbumCard
  },
  async asyncData({ app, query }) {
    if (!query._limit) (query._limit as string) = '20'
    const { data, headers } = await app.$api.albums.index(query)
    return {
      albums: data,
      total_count: headers['x-total-count']
    }
  }
})
export default class Index extends Vue {
  albums: Album[] = []
  total_count: number = 100
  limit: number = 20
  start: number = 0
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
  get lastPage(): boolean {
    return this.start + this.limit >= this.total_count
  }
  get firstPage(): boolean {
    return this.start - this.limit < 0
  }
  async fetchNewData() {
    const params = {
      _limit: this.limit,
      _start: this.start
    }
    const { data } = await this.$api.albums.index(params)
    this.albums = data
  }
  @Watch('limit')
  onLimitChanged() {
    this.fetchNewData()
  }
}
</script>
