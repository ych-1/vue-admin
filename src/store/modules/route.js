// import { defineStore } from 'pinia'
// import router, { constRoutes, dynamicRoutes, resetRoute } from 'router'
// import { useMenuStore } from './menus'
//
// export const useRouteStore = defineStore('route', {
//   state: () => ({
//     routes: constRoutes,
//   }),
//   getters: {},
//   actions: {
//     generateRoutes() {
//       return new Promise((resolve) => {
//         const routes = [...constRoutes, ...dynamicRoutes]
//         resetRoute()
//         routes.forEach((route) => {
//           router.addRoute(route)
//         })
//         this.routes = routes
//
//         // todo...
//         // 菜单初始化处理
//         const { generateMenus } = useMenuStore()
//         generateMenus(routes)
//         resolve(routes)
//       })
//     },
//   },
// })
