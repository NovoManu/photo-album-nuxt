<template>
  <v-toolbar>
    <v-btn v-if="$nuxt.$route.path !== '/'" icon @click="$nuxt.$router.go(-1)">
      <v-icon>
        arrow_back
      </v-icon>
    </v-btn>
    <v-toolbar-title>{{ pageName }}</v-toolbar-title>
  </v-toolbar>
</template>
<script lang="ts">
import { Component, Vue } from '~/node_modules/nuxt-property-decorator'

@Component
export default class DefaultToolbar extends Vue {
  get pageName() {
    const names = {
      index: 'Albums',
      'id-photos': 'Photos'
    }
    return names[this.$nuxt.$route.name]
  }
}
</script>
