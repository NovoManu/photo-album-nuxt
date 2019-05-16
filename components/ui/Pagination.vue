<template>
  <v-footer fixed height="56px" color="grey lighten-3">
    <v-layout row wrap justify-end align-center>
      <div class="d-flex align-center">
        <div class="grey--text hidden-xs-only">Rows per page:</div>
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
        <v-btn icon large :disabled="firstPage">
          <v-icon large @click="$emit('decrement')">chevron_left</v-icon>
        </v-btn>
        <v-btn icon large :disabled="lastPage">
          <v-icon large @click="$emit('increment')">chevron_right</v-icon>
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
