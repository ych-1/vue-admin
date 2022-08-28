<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      :class="{ 'shadow-lg': sidebar.shadow }"
      collapse-mode="width"
      :bordered="sidebar.bordered"
      :inverted="sidebar.inverted"
      :collapsed="sidebar.collapsed"
      :native-scrollbar="false"
      :show-trigger="sidebar.trigger"
      :width="sidebar.width"
      :collapsed-width="sidebar.collapsedWidth"
      @collapse="sidebar.collapsed = true"
      @expand="sidebar.collapsed = false"
    >
      <Logo v-if="show.logo" :collapsed="sidebar.collapsed" />
      <Menu :collapsed="sidebar.collapsed" :inverted="sidebar.inverted" />
    </n-layout-sider>
    <n-layout embedded>
      <n-layout-header
        :bordered="header.bordered"
        :inverted="header.inverted"
        :style="`height: ${header.height}px`"
        :class="{ 'shadow-md': header.shadow }"
        class="flex justify-between"
      >
        <div class="flex items-center">
          <Hamburger v-if="show.hamburger" v-model:collapsed="sidebar.collapsed" />
          <Breadcrumb v-if="show.breadcrumb" />
        </div>
        <div class="flex items-center">
          <Theme v-if="show.theme" v-model:darkTheme="show.darkTheme" />
          <ScreenFull v-if="show.screenFull" />
          <Settings />
          <Avatar v-if="show.avatar" />
        </div>
      </n-layout-header>
      <n-scrollbar :style="`height: calc(100vh - ${header.height}px)`">
        <n-layout-content
          embedded
          content-style="padding:0 15px 15px 15px;"
          style="margin-top: 15px"
        >
          <Main />
        </n-layout-content>
        <n-layout-footer v-if="show.footer">
          <Footer />
        </n-layout-footer>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<script setup>
import Logo from './components/Logo/index.vue'
import Menu from './components/Menu/index.vue'
import Hamburger from './components/Hamburger/index.vue'
import Breadcrumb from './components/Breadcrumb/index.vue'
import Theme from './components/Theme/index.vue'
import ScreenFull from './components/ScreenFull/index.vue'
import Settings from './components/Settings/index.vue'
import Avatar from './components/Avatar/index.vue'
import Main from './components/Main/index.vue'
import Footer from './components/Footer/index.vue'
import useAppStore from '@/store/modules/app.js'
import { storeToRefs } from 'pinia'

const { sidebar, header, show } = storeToRefs(useAppStore())
</script>

<style scoped></style>
