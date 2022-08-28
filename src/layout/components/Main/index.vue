<template>
  <n-card
    hoverable
    :style="`minHeight: calc(100vh - 30px - ${show.footer ? 45 : 0}px - ${header.height}px)`"
  >
    <router-view />
  </n-card>
</template>

<script setup>
import useAppStore from '@/store/modules/app.js'
import { storeToRefs } from 'pinia'

const { header, show } = storeToRefs(useAppStore())
</script>

<style scoped></style>
