<template>
  <div class="card d-flex">
    <v-layout row wrap>
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
            <v-img
              v-if="photo.thumbnailUrl"
              v-observe-visibility="visibilityChanged"
              :src="photo.thumbnailUrl"
            />
            <v-img v-else src="https://via.placeholder.com/150" />
            <div v-if="visible" class="card-photo__back">
              <div class="my-title d-flex align-center justify-center">
                <v-icon large color="white">zoom_in</v-icon>
              </div>
            </div>
          </v-card>
        </template>
        <div>
          <v-layout row align-center justify-space-between>
            <span class="my-title md">{{ albumTitle }}</span>
            <span class="my-subtitle">{{ userName }}</span>
          </v-layout>
          <v-card
            v-if="visible"
            max-height="600"
            height="100%"
            max-width="600"
            width="100%"
            class="card-modal"
          >
            <v-img :src="photo.url" width="auto" height="auto" contain />
          </v-card>
          <v-card-title>
            <span class="my-caption lg">{{ photo.title }}</span>
          </v-card-title>
        </div>
      </v-dialog>
      <v-card-title v-if="visible" class="pt-0">
        <span class="my-caption">{{ photo.title }}</span>
      </v-card-title>
    </v-layout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator'
import { Photo } from '~/utils/types'

@Component
export default class PhotoCard extends Vue {
  @Prop({ required: true }) photo!: Photo
  @Prop({ required: true }) albumTitle!: string
  @Prop({ required: true }) userName!: string
  @Model('changeVisibility') visible!: boolean
  dialog: boolean = false
  visibilityChanged() {
    this.$emit('changeVisibility')
  }
}
</script>
