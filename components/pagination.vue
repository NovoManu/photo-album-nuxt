<template>
  <div class="v-datatable v-table theme--light"><div class="v-datatable__actions"><div class="v-datatable__actions__select">Rows per page:<div role="combobox" class="v-input v-text-field v-select v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light"><div class="v-input__control"><div class="v-input__slot"><div class="v-select__slot"><div class="v-select__selections"><div class="v-select__selection v-select__selection--comma">5</div><input aria-label="Rows per page:" readonly="readonly" type="text" autocomplete="on" aria-readonly="false"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--append"><i aria-hidden="true" class="v-icon material-icons theme--light">arrow_drop_down</i></div></div></div><div class="v-menu"></div></div></div></div></div><div class="v-datatable__actions__range-controls"><div class="v-datatable__actions__pagination">–</div><button disabled="disabled" type="button" class="v-btn v-btn--disabled v-btn--flat v-btn--icon theme--light" aria-label="Previous page"><div class="v-btn__content"><i aria-hidden="true" class="v-icon material-icons theme--light">chevron_left</i></div></button><button disabled="disabled" type="button" class="v-btn v-btn--disabled v-btn--flat v-btn--icon theme--light" aria-label="Next page"><div class="v-btn__content"><i aria-hidden="true" class="v-icon material-icons theme--light">chevron_right</i></div></button></div></div></div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class pagination extends Vue {
  // props
  // data
  // vuex
  // computed
  // watch
  // hooks
  // methods
}
</script>
