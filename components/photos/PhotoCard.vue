<template>
  <div class="card d-flex">
    <v-layout row wrap align-start>
      <v-dialog v-model="dialog" width="100%" max-width="600">
        <template v-slot:activator="{ on }">
          <v-card
            class="card-photo"
            color="transparent"
            ripple
            tile
            flat
            v-on="on"
          >
            <v-img v-if="photo.thumbnailUrl" :src="photo.thumbnailUrl" />
            <v-img v-else src="https://via.placeholder.com/150" />
            <div class="card-photo__back">
              <div class="my-title d-flex align-center justify-center">
                <v-icon large color="white">zoom_in</v-icon>
              </div>
            </div>
          </v-card>
        </template>
        <v-card
          max-height="600"
          height="100%"
          max-width="600"
          width="100%"
          class="card-modal"
        >
          <v-img :src="photo.url" width="auto" height="auto" contain>
            <div class="description">
              <span class="my-caption lg">{{ photo.title }}</span>
            </div>
          </v-img>
        </v-card>
      </v-dialog>
      <v-card-title class="pt-0">
        <span class="my-caption">{{ photo.title }}</span>
      </v-card-title>
    </v-layout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Photo } from '~/utils/types'

@Component
export default class PhotoCard extends Vue {
  @Prop({ required: true }) photo!: Photo
  dialog: boolean = false
}
</script>
