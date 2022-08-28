<template>
  <div class="cursor-pointer mx-10px" @click="() => $emit('update:collapsed', !collapsed)">
    <svg-icon :name="collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'"></svg-icon>
  </div>
</template>

<script setup>
defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
})
</script>
