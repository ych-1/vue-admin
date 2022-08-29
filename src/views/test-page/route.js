const Layout = () => import('@/layout/index.vue')

export default {
  path: '/test',
  name: 'Test',
  component: Layout,
  redirect: '/test/message',
  meta: { title: '基础功能测试', icon: 'BookOutline' },
  children: [
    {
      name: 'Message',
      path: 'message',
      component: () => import('./message/index.vue'),
      meta: { title: '测试Message', icon: 'BookOutline' },
    },
    {
      name: 'Dialog',
      path: 'dialog',
      component: () => import('./dialog/index.vue'),
      meta: { title: '测试Dialog', icon: 'BookOutline' },
    },
  ],
}
