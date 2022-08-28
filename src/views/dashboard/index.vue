<template>
  <div class="app" v-for="n in 1" style="height: 100px" :key="n">
    {{ n }}
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'

const { user } = useStore()

const { collapsed } = storeToRefs(user)

const handleCollapsed = () => {
  user.toggleCollapsed()
}
</script>

<style scoped>
.app {
  height: 100px;
  line-height: 100px;
  display: flex;
  /*align-items: center;*/
  background-color: var(--primaryColor);
}
</style>
