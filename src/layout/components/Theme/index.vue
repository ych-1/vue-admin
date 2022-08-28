<template>
  <div class="mx-10px cursor-pointer" @click="() => $emit('update:darkTheme', !darkTheme)">
    <svg-icon :name="darkTheme ? 'MoonOutline' : 'SunnyOutline'" />
  </div>
</template>

<script setup>
defineProps({
  darkTheme: {
    type: Boolean,
    default: false,
  },
})
</script>
