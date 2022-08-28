<template>
  <div class="mx-10px cursor-pointer" @click="handleScreenfull">
    <svg-icon :name="icon ? 'FullscreenExitOutlined' : 'FullscreenOutlined'" />
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'
// 是否全屏
const icon = ref(screenfull.isFullscreen)
// 监听全屏事件
const handleScreenfull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
// 改变icon
const changeIcon = () => {
  icon.value = screenfull.isFullscreen
}
onMounted(() => {
  screenfull.on('change', changeIcon)
})
onBeforeMount(() => {
  screenfull.off('change')
})
</script>
