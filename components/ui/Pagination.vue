<template>
  <v-footer fixed height="56px" dark class="my-pagination">
    <v-layout row wrap justify-end align-center>
      <div class="d-flex align-center">
        <div class="hidden-xs-only">Rows per page:</div>
        <v-card flat tile max-width="50px" color="transparent" class="mx-3">
          <v-select
            :value="limit"
            :items="limits"
            hide-details
            single-line
            class="pt-0"
            @change="$emit('changed', $event)"
          />
        </v-card>
        <v-btn icon :disabled="firstPage" @click="$emit('decrement')">
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <v-btn icon :disabled="lastPage" @click="$emit('increment')">
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-footer>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Model
} from '~/node_modules/nuxt-property-decorator'

@Component
export default class Pagination extends Vue {
  @Prop({ required: true }) firstPage!: boolean
  @Prop({ required: true }) lastPage!: boolean
  @Model('changed') limit!: number
  limits: number[] = [20, 30, 50]
}
</script>
