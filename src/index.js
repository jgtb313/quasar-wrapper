import {
  Quasar,
  Dialog,
  BottomSheet,
  useQuasar as useApp,
  useMeta
} from 'quasar'

import * as components from './components'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const install = (app) => {
  app.use(Quasar, {
    plugins: {
      Dialog,
      BottomSheet
    }
  })
  
  for (const name in components) {
    const component = components[name]
    app.component(component.name, component)
  }
}

export { useApp, useMeta }

export default {
  install
}
