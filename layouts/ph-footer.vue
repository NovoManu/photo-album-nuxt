<template>
  <v-footer fixed height="56px" color="grey lighten-3">
    <v-layout row wrap justify-end align-center>
      <div class="d-flex align-center">
        <div class="grey--text hidden-xs-only">Rows per page:</div>
        <v-card flat tile max-width="50px" color="transparent" class="mx-3">
          <v-select :items="items" hide-details single-line class="pt-0" />
        </v-card>
        <div class="grey--text">30 of 120</div>
        <v-btn icon disabled large>
          <v-icon large>chevron_left</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-icon large>chevron_right</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-footer>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Phfooter extends Vue {
  // props
  // data
  // vuex
  // computed
  // watch
  // hooks
  // methods
}
</script>
