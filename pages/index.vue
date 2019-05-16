<template>
  <v-layout row wrap>
    <v-flex v-for="n in 9" :key="n" xs6 sm4 md2>
      <v-card hover ripple tile>
        <v-img src="https://via.placeholder.com/150/00ff" height="150px" />
        <v-card-title>
          <div>
            <span class="grey--text">Author</span><br />
            <span>Whitehaven Beach</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  // props
  // data
  // vuex
  // computed
  // watch
  // hooks
  // methods
}
</script>
