import { h } from 'vue'
import { NIcon } from 'naive-ui'
import * as ionicons5 from '@vicons/ionicons5'

export default function renderIcon(option) {
  return h(NIcon, null, { default: () => h(ionicons5[option.icon]) })
}
