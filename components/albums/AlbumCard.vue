<template>
  <v-flex xs6 sm4 md2 @click="redirectToAlbum">
    <v-card hover ripple tile>
      <v-img
        :src="`https://via.placeholder.com/150/${colors[album.userId]}/808080`"
        height="150px"
      />
      <v-card-title>
        <div>
          <span>{{ album.title }}</span>
          <span class="grey--text">
            <small>by</small> {{ user.name || 'User not found' }}
          </span>
          <br />
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
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
