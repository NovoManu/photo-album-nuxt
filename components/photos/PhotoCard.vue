<template>
  <v-flex xs6 sm4 md2>
    <v-dialog v-model="dialog" width="100vh" height="100vh">
      <template v-slot:activator="{ on }">
        <v-card hover ripple tile v-on="on">
          <v-img
            v-if="photo.thumbnailUrl"
            :src="photo.thumbnailUrl"
            height="150px"
          />
          <v-img v-else src="https://via.placeholder.com/150" height="150px" />
          <v-card-title>
            <div>
              <span>{{ photo.title }}</span>
            </div>
          </v-card-title>
        </v-card>
      </template>
      <v-card hover ripple tile>
        <v-img
          :src="photo.url"
          width="auto"
          height="auto"
          max-height="100%"
          max-width="100%"
          contain
          class="grey darken-4"
        />
      </v-card>
    </v-dialog>
  </v-flex>
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
