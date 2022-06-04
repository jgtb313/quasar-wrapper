<script>
import { QBtn } from 'quasar'

export default {
  name: 'QWButton',

  components: {
    QBtn
  },

  setup () {
    return {}
  }
}
</script>

<template>
  <q-btn v-bind="$attrs" no-caps unelevated>
    <slot />
  </q-btn>
</template>
