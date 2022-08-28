import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import useAppStore from './modules/app.js'

const store = createPinia()

// 数据持久化
store.use(piniaPluginPersistedstate)

export function useStore() {
  return {
    user: useAppStore(),
  }
}

export default store
