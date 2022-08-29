<template>
  <n-menu
    :accordion="sidebar.accordion"
    :collapsed-width="sidebar.collapsedWidth"
    :collapsed="sidebar.collapsed"
    :inverted="sidebar.inverted"
    :options="menus"
    key-field="name"
    label-field="title"
    :render-icon="renderIcon"
    :on-update:value="handleMenuUpdate"
    :value="menuStore.selectedMenu"
  />
</template>

<script setup>
import useAppStore from '@/store/modules/app.js'
import useMenuStore from '@/store/modules/menu.js'

import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import renderIcon from '@/utils/icon.js'

const menuStore = useMenuStore()

const { sidebar } = storeToRefs(useAppStore())
const { menus } = storeToRefs(menuStore)

const router = useRouter()

menuStore.generateMenus(router.options.routes)

const handleMenuUpdate = (key) => {
  router.push({ name: key })
  // 选中菜单数据保存
  menuStore.setSelectedMenu(key)
}
</script>
