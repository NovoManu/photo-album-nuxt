<template>
  <v-app>
    <v-content class="mb-5 pb-2">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  // props
  // data
  clipped = false
  drawer = false
  fixed = false
  items = [
    {
      icon: 'apps',
      title: 'Welcome',
      to: '/'
    }
  ]
  miniVariant = false
  right = true
  rightDrawer = false
  title = 'Vuetify.js'
  // vuex
  // computed
  // watch
  // hooks
  // methods
}
</script>
