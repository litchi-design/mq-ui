// Component entry, the folder where the file exists will be exposed to the user
import Icon from './Icon.vue'
import type { App } from 'vue'

Icon.install = function(app: App) {
  app.component(Icon.name, Icon)
}

export const _IconComponent = Icon

export default Icon
