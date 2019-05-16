<template>
  <v-app>
    <DefaultToolbar />
    <v-content class="mb-5 pb-2">
      <v-container grid-list-lg>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DefaultToolbar from './default/DefaultToolbar.vue'

@Component({
  components: { DefaultToolbar }
})
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
