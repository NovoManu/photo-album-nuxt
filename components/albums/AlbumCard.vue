<template>
  <div class="card d-flex">
    <v-card class="card-album" ripple tile @click="redirectToAlbum">
      <v-img
        :src="`https://via.placeholder.com/150/${colors[album.userId]}/808080`"
      />
      <div class="description">
        <span class="my-caption text-xs-center">{{ album.title }}</span>
        <small>by</small>
        <span>
          {{ user.name || 'User not found' }}
        </span>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'
import { Album, User } from '~/utils/types'
import colors from '~/utils/colors'

const UsersModule = namespace('users')

@Component
export default class AlbumCard extends Vue {
  @Prop({ required: true }) album!: Album
  @UsersModule.Getter getUserById!: any
  colors: string[] = colors
  get user(): User | {} {
    return this.getUserById(this.album.userId) || {}
  }
  redirectToAlbum() {
    this.$nuxt.$router.push(`/${this.album.id}/photos`)
  }
}
</script>
