<template>
  <router-link class="h-64px flex justify-center items-center" to="/">
    <img src="@/assets/vue.svg" style="height: 50%; aspect-ratio: 1/1" />
    <h2 v-show="!collapsed" class="title">vue admin</h2>
  </router-link>
</template>

<script setup>
defineProps({
  collapsed: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.title {
  font-size: 16px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%);
  -webkit-text-stroke-width: medium;
  text-transform: uppercase;
  margin-left: 8px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
