<template>
  <v-app>
    <ph-toolbar />
    <v-content class="mb-5 pb-2">
      <v-container grid-list-lg>
        <nuxt />
      </v-container>
    </v-content>
    <ph-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PhFooter from '~/layouts/ph-footer.vue'
import PhToolbar from '~/layouts/ph-toolbar.vue'

@Component({
  components: { PhToolbar, PhFooter }
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
