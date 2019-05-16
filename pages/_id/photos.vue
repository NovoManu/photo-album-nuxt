<template>
  <v-layout row wrap>
    <v-flex v-for="n in 9" :key="n" xs6 sm4 md2>
      <v-dialog v-model="dialog" width="100vh" height="100vh">
        <template v-slot:activator="{ on }">
          <v-card hover ripple tile v-on="on">
            <v-img src="https://via.placeholder.com/150" height="150px" />
            <v-card-title>
              <div>
                <span>Whitehaven Beach</span>
              </div>
            </v-card-title>
          </v-card>
        </template>

        <v-card hover ripple tile>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
  </v-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class photos extends Vue {
  // props
  // data
  // vuex
  // computed
  // watch
  // hooks
  // methods
}
</script>
