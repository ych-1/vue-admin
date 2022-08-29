import { defineStore } from 'pinia'

const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [],
    selectedMenu: '',
  }),
  getters: {
    getMenus(state) {
      return state.menus
    },
  },
  actions: {
    generateMenus(routes) {
      const menus = transMenus(routes)
      this.setMenus(menus)
    },
    setMenus(menus) {
      this.menus = menus
    },
    setSelectedMenu(menu = '') {
      this.selectedMenu = menu
    },
  },
  persist: true,
})

// 菜单数据转化
const transMenus = (routes) => {
  let result = []
  console.log(routes)
  routes.forEach((route) => {
    const { name, children } = route
    // 1. hidden为true的隐藏
    if (!(route.meta && route.meta.hidden)) {
      // 2. 有子路由时，对子路由进行递归处理
      if (children && children.length) {
        route.children = transMenus(children)
      }
      // 3. 如果只有一个子菜单，仅展示父级菜单，key为子菜单数据
      let flagName = ''
      if (route.children && route.children.length === 1) {
        flagName = route.children[0].name
      }
      result.push({
        name: flagName ? flagName : name,
        title: route.meta && route.meta.title ? route.meta.title : '',
        icon: route.meta && route.meta.icon ? route.meta.icon : '',
        children: flagName ? undefined : route.children,
      })
    }
  })
  return result
}

export default useMenuStore
