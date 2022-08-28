import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    show: {
      darkTheme: false,
      logo: true,
      footer: true,
      breadcrumb: true,
      hamburger: true,
      avatar: true,
      screenFull: true,
      theme: true,
    },
    sidebar: {
      collapsed: false,
      bordered: true,
      shadow: true,
      width: 220,
      collapsedWidth: 64,
      inverted: true,
      trigger: 'bar',
      accordion: true,
    },
    header: {
      bordered: true,
      shadow: true,
      height: 64,
      inverted: false,
      fixed: true,
    },
  }),
  getters: {},
  actions: {},
  persist: true,
})

export default useAppStore
