<template>
  <div class="mx-10px cursor-pointer" @click="activate">
    <svg-icon name="SettingOutlined" />
  </div>
  <n-drawer v-model:show="active" :width="350">
    <n-scrollbar>
      <n-space vertical class="px-50px mb-20px">
        <n-divider>界面显示</n-divider>

        <n-space justify="space-between">
          <span>暗黑主题</span>
          <n-switch v-model:value="show.darkTheme" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 Logo</span>
          <n-switch v-model:value="show.logo" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 Footer</span>
          <n-switch v-model:value="show.footer" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 Hamburger</span>
          <n-switch v-model:value="show.hamburger" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 Breadcrumb</span>
          <n-switch v-model:value="show.breadcrumb" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 ScreenFull</span>
          <n-switch v-model:value="show.screenFull" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 Theme</span>
          <n-switch v-model:value="show.theme" />
        </n-space>

        <n-space justify="space-between">
          <span>显示 Avatar</span>
          <n-switch v-model:value="show.avatar" />
        </n-space>

        <n-divider>侧边栏</n-divider>

        <n-space justify="space-between">
          <span>是否收缩</span>
          <n-switch v-model:value="sidebar.collapsed" />
        </n-space>

        <n-space justify="space-between">
          <span>边框</span>
          <n-switch v-model:value="sidebar.bordered" />
        </n-space>

        <n-space justify="space-between">
          <span>阴影</span>
          <n-switch v-model:value="sidebar.shadow" />
        </n-space>

        <n-space justify="space-between">
          <span>颜色反转</span>
          <n-switch v-model:value="sidebar.inverted" />
        </n-space>

        <n-space justify="space-between">
          <span>菜单手风琴</span>
          <n-switch v-model:value="sidebar.accordion" />
        </n-space>

        <n-space justify="space-between">
          <span>触发器</span>
          <n-radio-group v-model:value="sidebar.trigger">
            <n-radio v-for="trigger in triggers" :key="trigger.value" :value="trigger.value">
              {{ trigger.label }}
            </n-radio>
          </n-radio-group>
        </n-space>

        <n-space justify="space-between" vertical>
          <span>宽度：{{ sidebar.width }}px</span>
          <n-slider v-model:value="sidebar.width" :step="10" :min="200" :max="400" />
        </n-space>

        <n-space justify="space-between" vertical>
          <span>收缩宽度：{{ sidebar.collapsedWidth }}px</span>
          <n-slider v-model:value="sidebar.collapsedWidth" :min="60" :max="100" />
        </n-space>

        <n-divider>导航栏</n-divider>

        <n-space justify="space-between">
          <span>边框</span>
          <n-switch v-model:value="header.bordered" />
        </n-space>

        <n-space justify="space-between">
          <span>阴影</span>
          <n-switch v-model:value="header.shadow" />
        </n-space>

        <n-space justify="space-between">
          <span>颜色反转</span>
          <n-switch v-model:value="header.inverted" />
        </n-space>

        <n-space justify="space-between" vertical>
          <span>高度：{{ header.height }}px</span>
          <n-slider v-model:value="header.height" :min="50" :max="80" />
        </n-space>
      </n-space>
    </n-scrollbar>
  </n-drawer>
</template>

<script setup>
import { ref } from 'vue'
import useAppStore from '@/store/modules/app.js'
import { storeToRefs } from 'pinia'

const active = ref(false)

const activate = () => {
  active.value = true
}

const triggers = [
  {
    value: null,
    label: '无',
  },
  {
    value: 'bar',
    label: '条',
  },
  {
    value: 'arrow-circle',
    label: '箭头',
  },
]

const { sidebar, header, show } = storeToRefs(useAppStore())
</script>
