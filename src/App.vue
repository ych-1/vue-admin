<template>
  <n-config-provider :theme="appStore.show.darkTheme ? darkTheme : undefined">
    <router-view />
  </n-config-provider>
</template>

<script setup>
import { darkTheme } from 'naive-ui'
import useAppStore from '@/store/modules/app.js'

const appStore = useAppStore()
</script>
