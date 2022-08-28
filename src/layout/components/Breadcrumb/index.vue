<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="item in routers"
      :key="item.path"
      class="cursor-pointer"
      @click="handleBreadcrumbClick(item.path)"
    >
      {{ item?.meta?.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 当前路由的匹配记录
const routers = computed(() => {
  // 过滤掉没有meta的
  return route.matched.filter((item) => !!item.meta?.title)
})

const handleBreadcrumbClick = (path) => {
  if (path === route.path) return
  router.push(path)
}
</script>

<style scoped></style>
